import { createClient } from './sdk/client';
import { token as apiTokenCall } from './sdk/sdk.gen';
import type { Client } from './sdk/client/types.gen';
import { client as defaultClient } from './sdk/client.gen';

// 1. Interfaces định nghĩa cấu trúc dữ liệu
export interface HanetToken {
  access_token: string;
  refresh_token: string;
  expires_in?: number;      // Thời gian sống bằng giây (ví dụ: 86400)
  expires_at?: number;      // Timestamp (ms) thời điểm hết hạn thực tế
  token_type?: string;
}

export interface HanetCredentials {
  client_id: string;
  client_secret: string;
  redirect_uri?: string;
}

// Interface định cấu hình Storage tùy biến (Redis, Database, LocalStorage, Memory)
export interface HanetTokenStorage {
  getToken(): Promise<HanetToken | null> | HanetToken | null;
  setToken(token: HanetToken): Promise<void> | void;
}

// Bộ lưu trữ mặc định trong bộ nhớ (In-Memory Storage)
export class MemoryTokenStorage implements HanetTokenStorage {
  private currentToken: HanetToken | null = null;

  getToken() {
    return this.currentToken;
  }

  setToken(token: HanetToken) {
    this.currentToken = token;
  }
}

/**
 * Đăng ký Request Interceptor để định cấu hình chặt chẽ Base URL.
 * Chuyển các endpoint oauth2 / token sang domain https://oauth.hanet.com
 */
export function registerOAuth2UrlInterceptor(singleClient: Client) {
  singleClient.interceptors.request.use((request: any) => {
    const path = request.url;
    // Kiểm tra xem url của request có thuộc về OAuth2 không
    if (path.includes('/token') || path.includes('/oauth2/authorize')) {
      if (!path.startsWith('https://oauth.hanet.com')) {
        try {
          // Trích xuất path thực tế bao gồm query params
          let cleanPath = path;
          if (path.startsWith('http')) {
            const urlObj = new URL(path);
            cleanPath = urlObj.pathname + urlObj.search;
          }
          const newUrl = `https://oauth.hanet.com${cleanPath}`;

          // Trả về Request mới có URL được ghi đè an toàn sang oauth2 server
          return new Request(newUrl, request);
        } catch (e) {
          // Bỏ qua lỗi
        }
      }
    }
    return request;
  });
}

// Đăng ký ngay cho Default Client tĩnh toàn cục
registerOAuth2UrlInterceptor(defaultClient);

// 2. Class Quản lý Token và Tự động hóa Refresh Token
export class HanetTokenManager {
  private credentials: HanetCredentials;
  private storage: HanetTokenStorage;
  private isRefreshing: Promise<HanetToken | null> | null = null;
  private fallbackClient: Client;

  constructor(
    credentials: HanetCredentials,
    options?: {
      storage?: HanetTokenStorage;
      fallbackClient?: Client;
    }
  ) {
    this.credentials = credentials;
    this.storage = options?.storage || new MemoryTokenStorage();
    // Fallback Client dùng để gọi API refresh token mà không bị vòng lặp tuần hoàn interceptor
    this.fallbackClient = options?.fallbackClient || createClient({ baseUrl: 'https://partner.hanet.ai' });
    // Đảm bảo fallback client cũng được cấu hình chặt chẽ Base URL cho API OAuth2
    registerOAuth2UrlInterceptor(this.fallbackClient);
  }

  /**
   * Thiết lập Token hiện tại
   */
  async setToken(token: HanetToken): Promise<void> {
    if (token.expires_in && !token.expires_at) {
      token.expires_at = Date.now() + token.expires_in * 1000;
    }
    await this.storage.setToken(token);
  }

  /**
   * Lấy Token hiện tại từ storage
   */
  async getToken(): Promise<HanetToken | null> {
    return await this.storage.getToken();
  }

  /**
   * Kiểm tra Token có bị hết hạn hay không
   */
  async isTokenExpired(bufferMs = 300000): Promise<boolean> {
    const token = await this.getToken();
    if (!token || !token.access_token) return true;
    if (!token.expires_at) return false;

    // Mặc định bufferMs là 5 phút để chủ động refresh trước khi token thực sự hết hạn
    return Date.now() + bufferMs >= token.expires_at;
  }

  /**
   * Thực hiện gọi API của HANET đổi Refresh Token lấy Access Token mới
   */
  async refreshAccessToken(): Promise<HanetToken | null> {
    if (this.isRefreshing) {
      return this.isRefreshing;
    }

    this.isRefreshing = (async () => {
      try {
        const tokenData = await this.getToken();
        if (!tokenData || !tokenData.refresh_token) {
          console.warn('[HANET SDK] Không tìm thấy refresh_token để tự động refresh.');
          return null;
        }

        console.log('[HANET SDK] Phát hiện token hết hạn hoặc sắp hết hạn. Đang tự động refresh token...');

        // Gọi API /token thô từ HANET bằng fallbackClient
        const response = await apiTokenCall({
          client: this.fallbackClient,
          body: {
            grant_type: 'refresh_token',
            client_id: this.credentials.client_id,
            client_secret: this.credentials.client_secret,
            refresh_token: tokenData.refresh_token
          }
        });

        const data = response.data as any;
        if (data && data.access_token) {
          const newToken: HanetToken = {
            access_token: data.access_token,
            refresh_token: data.refresh_token || tokenData.refresh_token,
            expires_in: data.expires_in ? Number(data.expires_in) : 86400,
          };

          await this.setToken(newToken);
          console.log('[HANET SDK] Tự động refresh token thành công!');
          return newToken;
        } else {
          console.error('[HANET SDK] Refresh token thất bại. Response:', JSON.stringify(data));
          return null;
        }
      } catch (err) {
        console.error('[HANET SDK] Lỗi nghiêm trọng khi refresh token:', err);
        return null;
      } finally {
        this.isRefreshing = null;
      }
    })();

    return this.isRefreshing;
  }

  /**
   * Lấy Access Token hợp lệ. Nếu hết hạn, tự động refresh và trả về token mới.
   */
  async getOrRefreshAccessToken(): Promise<string | null> {
    const tokenData = await this.getToken();
    if (!tokenData) return null;

    if (await this.isTokenExpired()) {
      const refreshedToken = await this.refreshAccessToken();
      return refreshedToken ? refreshedToken.access_token : null;
    }

    return tokenData.access_token;
  }
}

// 3. Class Factory Khởi tạo Client Độc lập hỗ trợ Multi-Tenant
export class HanetClientFactory {
  /**
   * Tạo ra một Client instance độc lập hoàn toàn với cấu hình riêng và tự động Refresh Token.
   * Rất lý tưởng cho môi trường Server-Side đa khách thuê (Multi-Tenant).
   */
  static createClient(
    credentials: HanetCredentials,
    options?: {
      baseUrl?: string;
      storage?: HanetTokenStorage;
      token?: HanetToken;
    }
  ): Client {
    const baseUrl = options?.baseUrl || 'https://partner.hanet.ai';
    const singleClient = createClient({ baseUrl });

    // Đảm bảo client động cũng được cấu hình chặt chẽ Base URL cho API OAuth2
    registerOAuth2UrlInterceptor(singleClient);

    // Khởi tạo Token Manager cho riêng client này
    const tokenManager = new HanetTokenManager(credentials, {
      storage: options?.storage,
      fallbackClient: createClient({ baseUrl: 'https://partner.hanet.ai' })
    });

    if (options?.token) {
      tokenManager.setToken(options.token);
    }

    // Đăng ký Interceptor đính kèm Token tự động và tự động Refresh Token
    singleClient.interceptors.request.use(async (request: any, requestOptions: any) => {
      // Bỏ qua việc đính kèm token cho API cấp phát token oauth2
      if (request.url.includes('/token') || request.url.includes('/oauth2/')) {
        return request;
      }

      const validToken = await tokenManager.getOrRefreshAccessToken();

      if (validToken) {
        if (requestOptions.body instanceof URLSearchParams) {
          if (!requestOptions.body.has('token') && !requestOptions.body.has('access_token')) {
            requestOptions.body.append('token', validToken);
            requestOptions.body.append('access_token', validToken);
          }
        } else if (typeof requestOptions.body === 'object' && requestOptions.body !== null) {
          const bodyObj = requestOptions.body as Record<string, any>;
          if (!bodyObj['token'] && !bodyObj['access_token']) {
            bodyObj['token'] = validToken;
            bodyObj['access_token'] = validToken;
          }
        }
      }
      return request;
    });

    (singleClient as any).tokenManager = tokenManager;

    return singleClient;
  }
}

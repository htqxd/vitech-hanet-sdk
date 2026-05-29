import { Client } from './sdk/client/types.gen';
export interface HanetToken {
    access_token: string;
    refresh_token: string;
    expires_in?: number;
    expires_at?: number;
    token_type?: string;
}
export interface HanetCredentials {
    client_id: string;
    client_secret: string;
    redirect_uri?: string;
}
export interface HanetTokenStorage {
    getToken(): Promise<HanetToken | null> | HanetToken | null;
    setToken(token: HanetToken): Promise<void> | void;
}
export declare class MemoryTokenStorage implements HanetTokenStorage {
    private currentToken;
    getToken(): HanetToken | null;
    setToken(token: HanetToken): void;
}
/**
 * Đăng ký Request Interceptor để định cấu hình chặt chẽ Base URL.
 * Chuyển các endpoint oauth2 / token sang domain https://oauth.hanet.com
 */
export declare function registerOAuth2UrlInterceptor(singleClient: Client): void;
export declare class HanetTokenManager {
    private credentials;
    private storage;
    private isRefreshing;
    private fallbackClient;
    constructor(credentials: HanetCredentials, options?: {
        storage?: HanetTokenStorage;
        fallbackClient?: Client;
    });
    /**
     * Thiết lập Token hiện tại
     */
    setToken(token: HanetToken): Promise<void>;
    /**
     * Lấy Token hiện tại từ storage
     */
    getToken(): Promise<HanetToken | null>;
    /**
     * Kiểm tra Token có bị hết hạn hay không
     */
    isTokenExpired(bufferMs?: number): Promise<boolean>;
    /**
     * Thực hiện gọi API của HANET đổi Refresh Token lấy Access Token mới
     */
    refreshAccessToken(): Promise<HanetToken | null>;
    /**
     * Lấy Access Token hợp lệ. Nếu hết hạn, tự động refresh và trả về token mới.
     */
    getOrRefreshAccessToken(): Promise<string | null>;
}
export declare class HanetClientFactory {
    /**
     * Tạo ra một Client instance độc lập hoàn toàn với cấu hình riêng và tự động Refresh Token.
     * Rất lý tưởng cho môi trường Server-Side đa khách thuê (Multi-Tenant).
     */
    static createClient(credentials: HanetCredentials, options?: {
        baseUrl?: string;
        storage?: HanetTokenStorage;
        token?: HanetToken;
    }): Client;
}
//# sourceMappingURL=auth-helper.d.ts.map
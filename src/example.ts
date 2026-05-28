import { HanetClientFactory, type HanetToken, type HanetTokenStorage } from './auth-helper';
import { profileGetProfile, placeGetPlaces } from './sdk/sdk.gen';

/**
 * Hướng dẫn sử dụng Vitech HANET SDK nâng cao
 * Áp dụng đầy đủ Best Practices: Client Factory (Multi-Tenant) & Auto-Refresh Token.
 */

// 1. KỊCH BẢN 1: DÀNH CHO SERVER-SIDE ĐA KHÁCH THUÊ (MULTI-TENANT BEST PRACTICE)
// Mỗi người dùng (hoặc khách thuê) sẽ có một Client instance hoàn toàn độc lập,
// có bộ lưu trữ token và thông tin xác thực riêng biệt, tránh rò rỉ token chéo.
async function demoMultiTenantServer() {
  console.log('--- KHỞI CHẠY DEMO MULTI-TENANT SERVER (BEST PRACTICE) ---');

  // Thông tin Client Credentials được HANET cấp cho ứng dụng của bạn
  const credentials = {
    client_id: 'YOUR_PARTNER_CLIENT_ID',
    client_secret: 'YOUR_PARTNER_CLIENT_SECRET'
  };

  // Giả lập Token lấy từ cơ sở dữ liệu của một khách thuê (ví dụ: Tenant A)
  const tenantAToken: HanetToken = {
    access_token: 'OLD_ACCESS_TOKEN_A',
    refresh_token: 'REFRESH_TOKEN_A',
    expires_in: 3600, // Token sống trong 1 giờ
    // Chúng ta có thể giả lập token đã hết hạn bằng cách đặt expires_at lùi về quá khứ
    expires_at: Date.now() - 10000
  };

  // Bạn cũng có thể thiết kế một bộ lưu trữ lưu trữ token vào Redis hoặc Database thay vì bộ nhớ RAM
  const databaseStorage: HanetTokenStorage = {
    getToken: async () => {
      // Giả lập đọc từ database
      return tenantAToken;
    },
    setToken: async (newToken) => {
      // Giả lập cập nhật lại token mới vào database khi hệ thống tự động refresh thành công
      tenantAToken.access_token = newToken.access_token;
      tenantAToken.refresh_token = newToken.refresh_token;
      tenantAToken.expires_at = newToken.expires_at;
      console.log('[DATABASE] Đã cập nhật token mới cho Tenant A vào CSDL:', newToken.access_token);
    }
  };

  // Khởi tạo Client độc lập hoàn toàn cho Tenant A thông qua Factory
  const clientA = HanetClientFactory.createClient(credentials, {
    baseUrl: 'https://partner.hanet.ai',
    storage: databaseStorage,
    token: tenantAToken
  });

  try {
    console.log('\nTenant A: Đang gọi API lấy thông tin Profile...');
    // CỰC KỲ TIỆN LỢI: Bạn chỉ cần truyền biến `client` độc lập vào tham số của API call.
    // Dưới nền, Interceptor sẽ tự động kiểm tra token hết hạn, gọi API đổi refresh token,
    // lưu token mới vào database, tự chèn token mới vào body và gửi đi request thực tế!
    const response = await profileGetProfile({ client: clientA });

    console.log('Tenant A Response:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Tenant A Gọi API thất bại:', error);
  }
}

// 2. KỊCH BẢN 2: ỨNG DỤNG ĐƠN NGƯỜI DÙNG (SINGLE-TENANT / CLIENT-SIDE)
// Nếu bạn chỉ viết tool cá nhân hoặc ứng dụng chạy đơn người dùng,
// bạn có thể sử dụng trực tiếp Singleton client mặc định của SDK.
import { client as defaultClient } from './sdk/client.gen';

async function demoSingleTenantClient() {
  console.log('\n--- KHỞI CHẠY DEMO SINGLE-TENANT CLIENT ---');

  // Cấu hình default client toàn cục
  defaultClient.setConfig({
    baseUrl: 'https://partner.hanet.ai'
  });

  const MY_TOKEN = 'YOUR_STATIC_ACCESS_TOKEN_HERE';

  // Đăng ký interceptor đơn giản để chèn token tự động
  defaultClient.interceptors.request.use((request, options) => {
    if (request.method === 'POST') {
      if (options.body instanceof URLSearchParams) {
        if (!options.body.has('token')) {
          options.body.append('token', MY_TOKEN);
        }
      }
    }
    return request;
  });

  try {
    console.log('Single Tenant: Đang lấy danh sách địa điểm...');
    const placesResponse = await placeGetPlaces(); // Tự động dùng defaultClient và tự động chèn MY_TOKEN
    console.log('Single Tenant Response:', JSON.stringify(placesResponse.data, null, 2));
  } catch (error) {
    console.error('Single Tenant Gọi API thất bại:', error);
  }
}

// Hàm khởi chạy demo chung
export async function runDemo() {
  await demoMultiTenantServer();
  await demoSingleTenantClient();
}

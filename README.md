# Vitech HANET Developer SDK (TypeScript/JavaScript)

Bộ SDK Client chuyên nghiệp được sinh tự động bằng công cụ hiện đại `@hey-api/openapi-ts` từ tài liệu Postman chính thức của **HANET Developer API** (Camera AI, Face Recognition, Checkin, Places, Departments).

Dự án cung cấp bộ thư viện kiểu an toàn (strongly-typed), gọn nhẹ, chạy cực nhanh dựa trên Fetch API và hỗ trợ đầy đủ auto-complete của IDE.

---

## 🌟 Tính Năng Nổi Bật

- **Tự động cập nhật**: Tích hợp script tự động đồng bộ API trực tiếp từ tài liệu Postman CDN.
- **Làm sạch API**: Tự động loại bỏ các ký tự điều khiển ẩn đặc biệt (`\b`, ``), sửa lỗi trùng lặp `operationId` của các API cũ/deprecated.
- **Auto-Refresh Token**: Cơ chế tự động đính kèm Token và tự động refresh dưới nền khi token hết hạn hoặc sắp hết hạn (trước 5 phút).
- **Multi-Tenant Ready**: Hỗ trợ khởi tạo các Client instances cô lập hoàn toàn (Factory Pattern) cho Server-side đa khách thuê, bên cạnh Client mặc định (Singleton) cho Single-Tenant.
- **Chuẩn TypeScript**: Định nghĩa kiểu dữ liệu (Interfaces) hoàn chỉnh cho mọi request và response chính, Intellisense siêu sạch.
- **Fetch Native**: Hiệu năng vượt trội, không phụ thuộc vào Axios hay thư viện cồng kềnh, tương thích hoàn toàn Browser và Node.js.

---

## 🛠️ Cài đặt & Cấu hình ban đầu

Cài đặt tất cả các package dependency của dự án:
```bash
npm install
```

Biên dịch dự án ra bundle Production (ESM & CommonJS kèm theo file `.d.ts` kiểu dữ liệu gộp):
```bash
npm run build
```

---

## 🔄 Tự động Cập nhật SDK từ Postman

Mỗi khi HANET thay đổi hoặc bổ sung thêm API mới trên tài liệu Postman chính thức, bạn chỉ cần chạy một lệnh duy nhất để tự động cào dữ liệu, chuyển sang OpenAPI Spec sạch sẽ được gom trong `scripts/` và tái tạo SDK TypeScript:

```bash
npm run update-sdk
```

---

## 💡 Hướng dẫn Khởi Tạo & Sử dụng SDK

Bộ SDK được thiết kế tối ưu cho cả hai môi trường: **Server-Side đa khách thuê (Multi-Tenant)** và **Client-Side/Tool đơn người dùng (Single-Tenant)**.

### 1. Khởi tạo Client cho Server-Side đa khách thuê (Multi-Tenant - KHUYÊN DÙNG)

Để tránh rò rỉ token chéo giữa các phiên người dùng khác nhau trên Server, hãy dùng **`HanetClientFactory`** để tạo ra các Client độc lập. 

Bạn có thể truyền một **`HanetTokenStorage`** tùy biến (ví dụ: ghi vào Redis hoặc Database) để tự động cập nhật token mới vào CSDL của bạn khi hệ thống tự động refresh token dưới nền:

```typescript
import { HanetClientFactory, type HanetToken, type HanetTokenStorage } from 'vitech-hanet-sdk';
import { profileGetProfile } from 'vitech-hanet-sdk';

// 1. Thông tin Credentials ứng dụng Partner được HANET cấp
const credentials = {
  client_id: 'YOUR_PARTNER_CLIENT_ID',
  client_secret: 'YOUR_PARTNER_CLIENT_SECRET'
};

// 2. Giả lập dữ liệu Token của Tenant A lấy từ Database của bạn
const tenantAToken: HanetToken = {
  access_token: 'OLD_ACCESS_TOKEN_A',
  refresh_token: 'REFRESH_TOKEN_A',
  expires_in: 3600,
  expires_at: Date.now() - 10000 // Giả lập token đã hết hạn
};

// 3. Định nghĩa cơ chế lưu trữ token vào CSDL của bạn
const customDatabaseStorage: HanetTokenStorage = {
  getToken: async () => {
    // Đọc token từ CSDL của Tenant A
    return tenantAToken;
  },
  setToken: async (newToken) => {
    // Tự động được gọi để cập nhật token mới vào CSDL khi refresh thành công!
    tenantAToken.access_token = newToken.access_token;
    tenantAToken.refresh_token = newToken.refresh_token;
    tenantAToken.expires_at = newToken.expires_at;
    console.log('CSDL: Đã cập nhật Access Token mới của Tenant A!');
  }
};

// 4. Tạo Client instance độc lập và bảo mật cho Tenant A
const myClient = HanetClientFactory.createClient(credentials, {
  baseUrl: 'https://partner.hanet.ai',
  storage: customDatabaseStorage,
  token: tenantAToken
});

// 5. Gọi các API cực kỳ gọn gàng.
// Dưới nền, Interceptor tự động check hạn, refresh token lưu vào CSDL, tự đính kèm token mới và gửi đi request thực tế!
const response = await profileGetProfile({ client: myClient });
console.log('Profile Tenant A:', response.data?.data);
```

### 2. Khởi tạo Client cho ứng dụng cá nhân / Tool đơn người dùng (Single-Tenant)

Nếu bạn chỉ viết công cụ cá nhân đơn giản, bạn có thể sử dụng Client tĩnh mặc định (`client`) của hệ thống:

```typescript
import { client, placeGetPlaces } from 'vitech-hanet-sdk';

// 1. Cấu hình địa chỉ server mặc định
client.setConfig({
  baseUrl: 'https://partner.hanet.ai'
});

const MY_STATIC_TOKEN = 'YOUR_ACCESS_TOKEN_HERE';

// 2. Đăng ký interceptor chèn token tự động cho các request POST
client.interceptors.request.use((request, options) => {
  if (request.method === 'POST') {
    if (options.body instanceof URLSearchParams) {
      if (!options.body.has('token')) {
        options.body.append('token', MY_STATIC_TOKEN);
      }
    }
  }
  return request;
});

async function run() {
  // Lấy danh sách địa điểm
  const placesResponse = await placeGetPlaces();
  console.log('Places:', placesResponse.data?.data);
}
```

---

## 🚀 Hướng dẫn sử dụng các nhóm API chính

SDK cung cấp đầy đủ 58 API của HANET được phân chia theo các nhóm chức năng chính:

### 🌟 Nhóm 1: Xác Thực & OAuth2 (Auth)
Dùng để đổi mã Code thành Access Token & Refresh Token:

```typescript
import { token } from 'vitech-hanet-sdk';

const tokenResponse = await token({
  body: {
    grant_type: 'authorization_code',
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    code: 'AUTHORIZATION_CODE_FROM_CALLBACK',
    redirect_uri: 'YOUR_REDIRECT_URI'
  }
});

if (tokenResponse.data?.access_token) {
  console.log('Access Token:', tokenResponse.data.access_token);
  console.log('Refresh Token:', tokenResponse.data.refresh_token);
}
```

### 📁 Nhóm 2: Quản Lý Địa Điểm (Place)
Xem danh sách, thêm, sửa, xóa và lấy thông tin chi tiết địa điểm:

```typescript
import { placeGetPlaces, placeAddPlace, placeGetPlaceInfo } from 'vitech-hanet-sdk';

// Lấy danh sách địa điểm của tài khoản
const places = await placeGetPlaces({ client: myClient });

// Tạo địa điểm mới
const newPlace = await placeAddPlace({
  client: myClient,
  body: {
    name: 'Văn Phòng Vitech Hà Nội',
    address: '8 Hàng Trống, Hoàn Kiếm, Hà Nội'
  }
});
```

### 📷 Nhóm 3: Quản Lý Thiết Bị (Device)
Lấy thông tin thiết bị, cập nhật và thiết lập MQTT:

```typescript
import { deviceGetListDevice, deviceGetDeviceInfo, deviceUpdateDevice } from 'vitech-hanet-sdk';

// Lấy danh sách thiết bị
const devices = await deviceGetListDevice({ client: myClient });

// Cập nhật tên thiết bị
await deviceUpdateDevice({
  client: myClient,
  body: {
    deviceID: 'CAMERA_ID_123',
    deviceName: 'Camera Cổng Chính'
  }
});
```

### 👤 Nhóm 4: Quản Lý Thành Viên & Điểm Danh (Person & Checkin)
Đăng ký khuôn mặt mới (Face Register), Cập nhật ảnh, Lấy thông tin, Xóa thành viên và Trích xuất dữ liệu chấm công checkin trong ngày hoặc theo khoảng thời gian:

```typescript
import { 
  personRegister, 
  personGetCheckinByPlaceIdInDay, 
  personGetCheckinByPlaceIdInTimestamp 
} from 'vitech-hanet-sdk';

// 1. Đăng ký thành viên mới kèm theo ảnh khuôn mặt (multipart/form-data)
// (Hình ảnh cần được resize về kích thước 1280x720 hoặc tương tự trước khi gửi)
const registerRes = await personRegister({
  client: myClient,
  body: {
    placeID: 'PLACE_ID_123',
    aliasID: 'NV001', // Mã nhân viên của bạn
    name: 'Nguyễn Văn A',
    title: 'Nhân Viên Kỹ Thuật',
    file: myImageFile // Đối tượng File hoặc Blob
  }
});

// 2. Lấy danh sách chấm công checkin trong ngày
const checkinsToday = await personGetCheckinByPlaceIdInDay({
  client: myClient,
  body: {
    placeID: 'PLACE_ID_123'
  }
});
console.log('Danh sách checkin hôm nay:', checkinsToday.data?.data);
```

### 🏢 Nhóm 5: Quản Lý Phòng Ban (Department)
Quản lý phòng ban trong địa điểm và liên kết/gỡ bỏ nhân viên vào phòng ban:

```typescript
import { departmentList, departmentCreate, departmentAddPerson } from 'vitech-hanet-sdk';

// Tạo phòng ban mới
const newDept = await departmentCreate({
  client: myClient,
  body: {
    placeID: 'PLACE_ID_123',
    name: 'Phòng Công Nghệ',
    description: 'Bộ phận Nghiên cứu & Phát triển'
  }
});

// Thêm nhân viên vào phòng ban
await departmentAddPerson({
  client: myClient,
  body: {
    departmentID: newDept.data?.data?.id,
    personIDs: 'NV001,NV002' // Danh sách aliasID cách nhau bằng dấu phẩy
  }
});
```

---

## 📂 Cấu trúc Thư mục Dự Án

- `scripts/update-sdk.js`: Script Node.js tự động hóa toàn bộ quy trình tải, chuyển đổi và generate SDK.
- `scripts/openapi.json`: Tài liệu đặc tả OpenAPI v3 Spec đã được làm sạch và tối ưu của HANET API.
- `scripts/hanet_collection.json`: File sao lưu dự phòng Postman Collection JSON thô của HANET.
- `openapi-ts.config.ts`: File cấu hình chính của `@hey-api/openapi-ts`.
- `src/sdk/`: Chứa mã nguồn SDK được sinh ra tự động (Không nên sửa trực tiếp):
  - `src/sdk/sdk.gen.ts`: Chứa 58 hàm gọi API của HANET.
  - `src/sdk/types.gen.ts`: Định nghĩa Interfaces đầy đủ cấu trúc dữ liệu.
  - `src/sdk/client.gen.ts` & `src/sdk/client/`: Cấu hình Fetch Client và Interceptors.
  - `src/sdk/index.ts`: Tệp xuất khẩu trung tâm của SDK.
- `src/index.ts`: Tệp entry point chính của npm package, re-export động 100% tự động (Dynamic Star Export) từ SDK và auth-helper để đảm bảo luồng tự động hoá không bao giờ bị gãy khi HANET cập nhật API mới.
- `src/auth-helper.ts`: Cấu trúc Token Manager, Memory Storage và Client Instance Factory (Best Practices).
- `src/example.ts`: File ví dụ cách dùng SDK, cấu hình Interceptor chèn token tự động.

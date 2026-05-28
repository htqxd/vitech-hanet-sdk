# Vitech HANET SDK - Hướng dẫn Vận hành

Dự án này là bộ SDK tự động sinh cho **HANET Developer API** (Camera AI, Face Recognition, Checkin, Places, Departments) từ tài liệu Postman chính thức thông qua OpenAPI v3 Spec và Hey API (`@hey-api/openapi-ts`).

## Lệnh Vận hành Chính

### 1. Cập nhật SDK từ Postman CDN (Khuyên dùng)
Lệnh này sẽ tự động tải file Postman Collection JSON mới nhất từ CDN, chuyển đổi sang OpenAPI 3.0.0, làm sạch các ký tự điều khiển ẩn đặc biệt, đổi tên các API Deprecated để tránh trùng hàm, và chạy generate lại SDK TypeScript:
```bash
npm run update-sdk
```

### 2. Biên dịch Dự án
Biên dịch toàn bộ mã nguồn TypeScript của SDK và Example sang định dạng Production:
```bash
npm run build
```

### 3. Sinh SDK thủ công từ OpenAPI Spec hiện tại
Sinh lại bộ SDK TypeScript từ file `scripts/openapi.json` đang có:
```bash
npm run generate-sdk
```

### 4. Chạy Preview
```bash
npm run preview
```

## Cấu trúc thư mục chính
* `scripts/update-sdk.js`: Script Node.js tự động hóa toàn bộ quy trình tải, chuyển dịch OpenAPI và generate SDK.
* `src/sdk/`: Chứa mã nguồn SDK được sinh ra tự động bởi `@hey-api/openapi-ts` (Không được chỉnh sửa trực tiếp các file trong này).
* `src/example.ts`: File hướng dẫn ví dụ cách cấu hình, đăng ký Interceptor và gọi API thực tế.
* `scripts/openapi.json`: Tài liệu đặc tả OpenAPI v3 Spec đã được làm sạch và tối ưu của Hanet API.
* `scripts/openapi-ts.config.ts` (nhưng đã chuyển về gốc `openapi-ts.config.ts` để Hey API chạy mượt mà nhất).
* `package.json`: Khai báo thư viện và script tự động hóa.

## Quy tắc Phát triển
- **Không chỉnh sửa trực tiếp các file trong `src/sdk/`**: Khi API của HANET thay đổi, chỉ cần chạy `npm run update-sdk` để cập nhật lại SDK.
- **Request Interceptor**: Sử dụng `client.interceptors.request.use` trong `src/example.ts` để tự động hóa việc chèn `token` cho tất cả các request POST thay vì truyền thủ công.

// Export Client tĩnh mặc định dùng cho Single-Tenant
export { client } from './sdk/client.gen';

// Re-export toàn bộ API Functions và Types được sinh tự động bởi Hey API.
// Khi chạy `npm run update-sdk`, tệp `src/sdk/index.ts` sẽ tự động cập nhật
// và tệp này sẽ thừa hưởng 100% thay đổi một cách động (Dynamic Star Export).
export * from './sdk';

// Export các helper quản lý OAuth2 Auto-Refresh & Client Instance Factory (Multi-Tenant)
export * from './auth-helper';

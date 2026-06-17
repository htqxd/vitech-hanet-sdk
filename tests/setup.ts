import dotenv from 'dotenv';
import { resolve } from 'path';

// Nạp các biến môi trường từ file .env ở thư mục gốc
dotenv.config({ path: resolve(__dirname, '../.env') });

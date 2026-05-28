import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const COLLECTION_URL = 'https://www.postman.com/collections/13088306-3cb35798-7f29-4648-85bf-45cfa0644272';
const OPENAPI_FILE = 'scripts/openapi.json';

// Danh sách các API Deprecated cần đặt lại operationId để tránh trùng lặp
const DEPRECATED_PATHS = [
  { path: '/device/get-list-device', method: 'post', newId: 'deviceGetListDeviceDeprecated' },
  { path: '/device/get-list-device-by-place', method: 'post', newId: 'deviceGetListDeviceByPlaceDeprecated' },
  { path: '/device/get-connection-status', method: 'post', newId: 'deviceGetConnectionStatusDeprecated' },
  { path: '/person/get-list-by-place', method: 'post', newId: 'personGetListByPlaceDeprecated' },
  { path: '/person/get-list-by-aliasID-all-place', method: 'post', newId: 'personGetListByAliasIdAllPlaceDeprecated' }
];

async function updateSDK() {
  console.log('================================================================');
  console.log('🚀 KHỞI CHẠY QUY TRÌNH TỰ ĐỘNG CẬP NHẬT HANET SDK');
  console.log('================================================================');

  try {
    // Đọc số lượng API và danh sách API cũ để so sánh
    let oldApis = [];
    if (fs.existsSync(OPENAPI_FILE)) {
      try {
        const oldSpec = JSON.parse(fs.readFileSync(OPENAPI_FILE, 'utf-8'));
        if (oldSpec.paths) {
          Object.keys(oldSpec.paths).forEach(p => {
            Object.keys(oldSpec.paths[p]).forEach(m => {
              oldApis.push(`${m.toUpperCase()} ${p}`);
            });
          });
        }
      } catch (e) {
        // Bỏ qua
      }
    }

    // 1. Tải Postman Collection
    console.log(`\nStep 1: Tải tài liệu Postman Collection từ: \n👉 ${COLLECTION_URL}`);
    const response = await fetch(COLLECTION_URL);
    if (!response.ok) {
      throw new Error(`Không thể tải Postman Collection. HTTP Status: ${response.status} ${response.statusText}`);
    }
    const collection = await response.json();
    console.log(`✅ Tải thành công! Tên collection: "${collection.info?.name}"`);

    // Lưu một bản sao lưu offline của Collection phòng hờ
    fs.writeFileSync('scripts/hanet_collection.json', JSON.stringify(collection, null, 2), 'utf-8');

    // 2. Chuyển đổi sang OpenAPI 3.0.0
    console.log('\nStep 2: Chuyển đổi Postman Collection sang OpenAPI 3.0.0 Spec...');
    const openapi = {
      openapi: "3.0.0",
      info: {
        title: "HANET Developer API",
        version: "1.0.0",
        description: "Bộ SDK được sinh tự động cho HANET Developer API (Camera AI, Face Recognition, Checkin, Places, Departments)"
      },
      servers: [
        {
          url: "https://partner.hanet.ai",
          description: "Live Partner API Server"
        },
        {
          url: "https://oauth.hanet.com",
          description: "OAuth2 Server"
        }
      ],
      paths: {},
      components: {
        schemas: {
          BaseResponse: {
            type: "object",
            properties: {
              returnCode: {
                type: "integer",
                description: "1: Request thành công. Khác 1: Request thất bại, có lỗi xảy ra."
              },
              returnMessage: {
                type: "string",
                description: "Thông báo lỗi hoặc trạng thái của yêu cầu."
              },
              data: {
                type: "object",
                nullable: true,
                description: "Dữ liệu trả về cụ thể của từng API."
              }
            },
            required: ["returnCode", "returnMessage"]
          }
        }
      }
    };

    // Hàm đệ quy quét lấy tất cả request từ Postman items
    function extractRequests(items) {
      const list = [];
      function recurse(arr) {
        arr.forEach(item => {
          if (item.item) {
            recurse(item.item);
          } else {
            list.push(item);
          }
        });
      }
      recurse(items);
      return list;
    }

    const allRequests = extractRequests(collection.item);
    console.log(`  -> Tìm thấy tổng cộng ${allRequests.length} API requests.`);

    allRequests.forEach(req => {
      const method = req.request.method.toLowerCase();
      let rawUrl = typeof req.request.url === 'string' ? req.request.url : (req.request.url.raw || '');

      // Chuẩn hóa path
      let cleanPath = rawUrl
        .replace('{{CAMERA_BASE_URL}}', '')
        .replace('https://partner.hanet.ai', '')
        .replace('https://oauth.hanet.com', '')
        .split('?')[0];

      if (!cleanPath.startsWith('/')) {
        cleanPath = '/' + cleanPath;
      }

      if (!openapi.paths[cleanPath]) {
        openapi.paths[cleanPath] = {};
      }

      // Tạo operationId kiểu camelCase
      const opId = req.name
        .replace(/\[.*?\]/g, '') // Bỏ [Deprecate]
        .replace(/[^a-zA-Z0-9]/g, ' ')
        .split(' ')
        .filter(x => x)
        .map((word, i) => i === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

      const operation = {
        summary: req.name,
        description: req.request.description || req.name,
        operationId: opId,
        parameters: [],
        responses: {}
      };

      // Tag phân loại endpoint
      const pathParts = cleanPath.split('/').filter(x => x);
      if (pathParts.length > 0) {
        let tag = pathParts[0];
        if (tag === 'oauth2' || tag === 'token') {
          tag = 'auth';
        }
        operation.tags = [tag.charAt(0).toUpperCase() + tag.slice(1)];
      } else {
        operation.tags = ["General"];
      }

      // Xử lý Query parameters cho GET
      if (method === 'get' && req.request.url.query) {
        req.request.url.query.forEach(q => {
          if (q.disabled) return;
          operation.parameters.push({
            name: q.key,
            in: "query",
            description: q.description || `Tham số ${q.key}`,
            required: true,
            schema: {
              type: "string",
              default: q.value
            }
          });
        });
      }

      // Xử lý Request Body cho POST
      if (['post', 'put', 'patch'].includes(method)) {
        const bodyInfo = req.request.body;
        if (bodyInfo) {
          if (bodyInfo.mode === 'urlencoded' && bodyInfo.urlencoded) {
            const properties = {};
            const required = [];

            bodyInfo.urlencoded.forEach(item => {
              if (item.disabled) return;
              properties[item.key] = {
                type: "string",
                description: item.description || `Tham số ${item.key}`
              };
              if (item.value) {
                properties[item.key].default = item.value;
              }
              required.push(item.key);
            });

            operation.requestBody = {
              content: {
                "application/x-www-form-urlencoded": {
                  schema: {
                    type: "object",
                    properties,
                    required
                  }
                }
              }
            };
          } else if (bodyInfo.mode === 'formdata' && bodyInfo.formdata) {
            const properties = {};
            const required = [];

            bodyInfo.formdata.forEach(item => {
              if (item.disabled) return;
              if (item.type === 'file') {
                properties[item.key] = {
                  type: "string",
                  format: "binary",
                  description: item.description || `File ${item.key}`
                };
              } else {
                properties[item.key] = {
                  type: "string",
                  description: item.description || `Tham số ${item.key}`
                };
                if (item.value) {
                  properties[item.key].default = item.value;
                }
              }
              required.push(item.key);
            });

            operation.requestBody = {
              content: {
                "multipart/form-data": {
                  schema: {
                    type: "object",
                    properties,
                    required
                  }
                }
              }
            };
          } else if (bodyInfo.mode === 'raw' && bodyInfo.raw) {
            try {
              const parsed = JSON.parse(bodyInfo.raw);
              const properties = {};
              Object.keys(parsed).forEach(key => {
                const val = parsed[key];
                const type = typeof val;
                properties[key] = {
                  type: type === 'object' ? (Array.isArray(val) ? 'array' : 'object') : type,
                  default: val
                };
              });

              operation.requestBody = {
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties
                    }
                  }
                }
              };
            } catch (e) {
              operation.requestBody = {
                content: {
                  "text/plain": {
                    schema: {
                      type: "string",
                      default: bodyInfo.raw
                    }
                  }
                }
              };
            }
          }
        }
      }

      // Xử lý Response
      let responseSchema = { $ref: "#/components/schemas/BaseResponse" };

      if (req.response && req.response.length > 0) {
        const mainResponse = req.response[0];
        if (mainResponse.body) {
          try {
            const respBody = JSON.parse(mainResponse.body);
            const schemaName = `${opId.charAt(0).toUpperCase() + opId.slice(1)}Response`;
            const properties = {
              returnCode: { type: "integer", description: "1: Thành công. Khác 1: Lỗi." },
              returnMessage: { type: "string" }
            };

            if (respBody.data !== undefined) {
              if (respBody.data === null) {
                properties.data = { type: "object", nullable: true };
              } else if (Array.isArray(respBody.data)) {
                const itemsType = respBody.data.length > 0 ? typeof respBody.data[0] : 'string';
                properties.data = {
                  type: "array",
                  items: { type: itemsType === 'object' ? 'object' : itemsType }
                };
              } else {
                const dataType = typeof respBody.data;
                if (dataType === 'object') {
                  const dataProperties = {};
                  Object.keys(respBody.data).forEach(k => {
                    const v = respBody.data[k];
                    if (v === null) {
                      dataProperties[k] = { type: "string", nullable: true };
                    } else if (Array.isArray(v)) {
                      dataProperties[k] = { type: "array", items: { type: "object" } };
                    } else {
                      dataProperties[k] = { type: typeof v };
                    }
                  });
                  properties.data = { type: "object", properties: dataProperties };
                } else {
                  properties.data = { type: dataType };
                }
              }
            }

            openapi.components.schemas[schemaName] = {
              type: "object",
              properties,
              required: ["returnCode", "returnMessage"]
            };
            responseSchema = { $ref: `#/components/schemas/${schemaName}` };
          } catch (err) {
            // Không parse được thì dùng mặc định BaseResponse
          }
        }
      }

      operation.responses = {
        "200": {
          description: "Thành công",
          content: {
            "application/json": {
              schema: responseSchema
            }
          }
        }
      };

      openapi.paths[cleanPath][method] = operation;
    });

    // 3. Làm sạch ký tự ẩn đặc biệt và chuẩn hóa API Deprecated
    console.log('\nStep 3: Làm sạch và tối ưu hóa tài liệu OpenAPI Spec...');
    let jsonStr = JSON.stringify(openapi, null, 2);

    // Xử lý lỗi thuộc tính aliasIDs chứa ký tự backspace
    jsonStr = jsonStr.replace(/\\baliasIDs/g, 'aliasIDs');
    jsonStr = jsonStr.replace(/\baliasIDs/g, 'aliasIDs');

    // Loại bỏ các ký tự ẩn nguy hại \b và  trong văn bản
    jsonStr = jsonStr.replace(/\\b/g, '');
    jsonStr = jsonStr.replace(/\b/g, '');
    jsonStr = jsonStr.replace(/\\u001c/g, '');
    jsonStr = jsonStr.replace(/ /g, '');

    const cleanOpenApi = JSON.parse(jsonStr);

    // Gán operationId riêng biệt cho các endpoint cũ/Deprecated để không bị trùng lặp
    DEPRECATED_PATHS.forEach(item => {
      if (cleanOpenApi.paths[item.path] && cleanOpenApi.paths[item.path][item.method]) {
        cleanOpenApi.paths[item.path][item.method].operationId = item.newId;
      }
    });

    // Ghi file openapi.json
    fs.writeFileSync(OPENAPI_FILE, JSON.stringify(cleanOpenApi, null, 2), 'utf-8');
    console.log(`✅ Làm sạch thành công! File đã lưu tại: ${OPENAPI_FILE}`);

    // So sánh danh sách API mới và cũ
    let newApis = [];
    if (cleanOpenApi.paths) {
      Object.keys(cleanOpenApi.paths).forEach(p => {
        Object.keys(cleanOpenApi.paths[p]).forEach(m => {
          newApis.push(`${m.toUpperCase()} ${p}`);
        });
      });
    }

    console.log('\n--- BÁO CÁO THAY ĐỔI API (API CHANGE REPORT) ---');
    console.log(`Tổng số lượng API cũ: ${oldApis.length}`);
    console.log(`Tổng số lượng API mới: ${newApis.length}`);

    const added = newApis.filter(x => !oldApis.includes(x));
    const removed = oldApis.filter(x => !newApis.includes(x));

    if (added.length > 0) {
      console.log(`🚀 Phát hiện ${added.length} API mới được THÊM:`);
      added.forEach(api => console.log(`   ➕ ${api}`));
    }
    if (removed.length > 0) {
      console.log(`⚠️ Phát hiện ${removed.length} API bị GỠ BỎ:`);
      removed.forEach(api => console.log(`   ➖ ${api}`));
    }
    if (added.length === 0 && removed.length === 0) {
      console.log('✨ Không phát hiện bất kỳ endpoint API mới nào được thêm hay bớt.');
    }
    console.log('------------------------------------------------');

    // 4. Gọi hey openapi-ts generate
    console.log('\nStep 4: Chạy `@hey-api/openapi-ts` để cập nhật các SDK file...');
    execSync('npm run generate-sdk', { stdio: 'inherit' });
    console.log('✅ Bộ SDK TypeScript đã được generate thành công vào thư mục src/sdk!');

    console.log('\n================================================================');
    console.log('🎉 CẬP NHẬT SDK HOÀN TẤT THÀNH CÔNG RỰC RỠ!');
    console.log('================================================================');
  } catch (error) {
    console.error('\n❌ XẢY RA LỖI TRONG QUY TRÌNH CẬP NHẬT SDK:');
    console.error(error);
    process.exit(1);
  }
}

updateSDK();

import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './scripts/openapi.json',
  output: 'src/sdk',
  client: '@hey-api/client-fetch'
});

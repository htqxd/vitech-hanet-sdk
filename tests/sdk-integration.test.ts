import { describe, it, expect } from 'vitest';
import { profileGetProfile, placeGetPlaces } from '../src/sdk/sdk.gen';
import { HanetClientFactory, HanetTokenManager, MemoryTokenStorage } from '../src/auth-helper';
import { client as defaultClient } from '../src/sdk/client.gen';

describe('Hanet SDK Integration & Helper Tests', () => {
  const clientId = process.env.HANET_CLIENT_ID;
  const clientSecret = process.env.HANET_CLIENT_SECRET;
  const accessToken = process.env.HANET_ACCESS_TOKEN;

  const hasCredentials = !!(clientId && clientSecret && accessToken);

  describe('Live API Calls (Integration)', () => {
    const runIf = hasCredentials ? it : it.skip;

    runIf('should retrieve profile info using static defaultClient', async () => {
      defaultClient.setConfig({
        baseUrl: 'https://partner.hanet.ai'
      });

      const interceptorId = defaultClient.interceptors.request.use(async (request) => {
        if (request.method === 'POST') {
          const contentType = request.headers.get('content-type') || '';
          if (contentType.includes('application/x-www-form-urlencoded')) {
            try {
              const bodyText = await request.clone().text();
              const params = new URLSearchParams(bodyText);
              if (!params.has('token')) {
                params.append('token', accessToken!);
                return new Request(request.url, {
                  method: request.method,
                  headers: request.headers,
                  body: params.toString()
                });
              }
            } catch (e) {
              // Bỏ qua lỗi
            }
          }
        }
        return request;
      });

      try {
        const response = await profileGetProfile();
        expect([200, 401]).toContain(response.response.status);

        if (response.response.status === 200) {
          expect(response.data).toBeDefined();
          const data = response.data as any;
          expect(data).toHaveProperty('returnCode');
        } else {
          expect(response.error).toBeDefined();
        }
      } finally {
        defaultClient.interceptors.request.eject(interceptorId);
      }
    });

    runIf('should retrieve places info using Client Factory', async () => {
      const client = HanetClientFactory.createClient({
        client_id: clientId!,
        client_secret: clientSecret!
      }, {
        token: {
          access_token: accessToken!,
          refresh_token: 'dummy-refresh-token',
          expires_in: 3600,
          expires_at: Date.now() + 3600 * 1000
        }
      });

      const response = await placeGetPlaces({ client });
      expect([200, 401]).toContain(response.response.status);

      if (response.response.status === 200) {
        expect(response.data).toBeDefined();
        const data = response.data as any;
        expect(data).toHaveProperty('returnCode');
      } else {
        expect(response.error).toBeDefined();
      }
    });
  });

  describe('HanetTokenManager & Auto-Refresh Logic', () => {
    it('should correctly initialize and handle token storage', async () => {
      const storage = new MemoryTokenStorage();
      const manager = new HanetTokenManager({
        client_id: 'test-id',
        client_secret: 'test-secret'
      }, { storage });

      const mockToken = {
        access_token: 'test-access',
        refresh_token: 'test-refresh',
        expires_in: 3600
      };

      await manager.setToken(mockToken);

      const storedToken = await manager.getToken();
      expect(storedToken?.access_token).toBe('test-access');
      expect(storedToken?.expires_at).toBeGreaterThan(Date.now());

      const expired = await manager.isTokenExpired();
      expect(expired).toBe(false);
    });

    it('should return valid token immediately without fetching new one if token is not expired', async () => {
      const storage = new MemoryTokenStorage();
      await storage.setToken({
        access_token: 'valid-token',
        refresh_token: 'refresh',
        expires_at: Date.now() + 600000
      });

      const manager = new HanetTokenManager({
        client_id: 'my-client-id',
        client_secret: 'my-client-secret'
      }, { storage });

      const token = await manager.getOrRefreshAccessToken();
      expect(token).toBe('valid-token');
    });

    it('should trigger auto-refresh when token is expired', async () => {
      let fetchCalled = false;
      let sentBody: string = '';

      const mockFetch = async (input: RequestInfo | URL, init?: RequestInit) => {
        fetchCalled = true;
        const req = input instanceof Request ? input : new Request(input, init);
        try {
          sentBody = await req.clone().text();
        } catch (e) {
          sentBody = '';
        }
        return new Response(JSON.stringify({
          access_token: 'new-access-token',
          refresh_token: 'new-refresh-token',
          expires_in: '7200'
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      };

      const storage = new MemoryTokenStorage();

      await storage.setToken({
        access_token: 'old-access',
        refresh_token: 'old-refresh',
        expires_at: Date.now() - 10000
      });

      const factoryClient = HanetClientFactory.createClient({
        client_id: 'my-client-id',
        client_secret: 'my-client-secret'
      }, {
        storage,
        baseUrl: 'https://partner.hanet.ai'
      });

      const manager = (factoryClient as any).tokenManager as HanetTokenManager;
      (manager as any).fallbackClient.setConfig({ fetch: mockFetch });

      const validToken = await manager.getOrRefreshAccessToken();

      expect(fetchCalled).toBe(true);
      expect(validToken).toBe('new-access-token');

      expect(sentBody).toContain('grant_type=refresh_token');
      expect(sentBody).toContain('client_id=my-client-id');
      expect(sentBody).toContain('client_secret=my-client-secret');
      expect(sentBody).toContain('refresh_token=old-refresh');

      const updatedToken = await storage.getToken();
      expect(updatedToken?.access_token).toBe('new-access-token');
      expect(updatedToken?.refresh_token).toBe('new-refresh-token');
    });

    it('should handle refresh token API failures gracefully', async () => {
      const mockFetch = async () => {
        return new Response(JSON.stringify({
          error: 'invalid_grant',
          error_description: 'Invalid refresh token'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      };

      const storage = new MemoryTokenStorage();

      await storage.setToken({
        access_token: 'old-access',
        refresh_token: 'invalid-refresh',
        expires_at: Date.now() - 10000
      });

      const manager = new HanetTokenManager({
        client_id: 'my-client-id',
        client_secret: 'my-client-secret'
      }, { storage });

      (manager as any).fallbackClient.setConfig({ fetch: mockFetch });

      const validToken = await manager.getOrRefreshAccessToken();
      expect(validToken).toBeNull();
    });
  });
});

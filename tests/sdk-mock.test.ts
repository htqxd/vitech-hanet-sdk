import { describe, it, expect } from 'vitest';
import * as api from '../src/sdk/sdk.gen';
import { createClient } from '../src/sdk/client';
import { registerOAuth2UrlInterceptor } from '../src/auth-helper';

describe('Hanet SDK Auto-generated API Calls (Mock Tests)', () => {
  const apiFunctions = Object.entries(api).filter(
    ([_, val]) => typeof val === 'function'
  );

  it('should successfully call every API endpoint with correct client settings', async () => {
    expect(apiFunctions.length).toBeGreaterThan(40);

    for (const [funcName, func] of apiFunctions) {
      let capturedUrl = '';
      let capturedMethod = '';
      let capturedHeaders: Record<string, string> = {};
      let sentBody = '';

      const mockFetch = async (input: RequestInfo | URL, init?: RequestInit) => {
        const req = input instanceof Request ? input : new Request(input, init);
        capturedUrl = req.url;
        capturedMethod = req.method;

        const headersRecord: Record<string, string> = {};
        req.headers.forEach((value, key) => {
          headersRecord[key] = value;
        });
        capturedHeaders = headersRecord;

        try {
          sentBody = await req.clone().text();
        } catch (e) {
          sentBody = '';
        }

        return new Response(JSON.stringify({
          returnCode: '1',
          returnMessage: 'Mock Success',
          data: {
            url: capturedUrl,
            method: capturedMethod,
            body: sentBody
          }
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      };

      const testClient = createClient({
        baseUrl: 'https://partner.hanet.ai',
        fetch: mockFetch
      });

      registerOAuth2UrlInterceptor(testClient);

      const mockOptions: any = {
        client: testClient,
      };

      if (funcName === 'oauth2Authorize') {
        mockOptions.query = {
          client_id: 'mock-client-id',
          redirect_uri: 'mock-redirect-uri',
          response_type: 'code'
        };
      } else {
        mockOptions.body = {
          token: 'mock-token',
          client_id: 'mock-client-id',
          client_secret: 'mock-client-secret',
          placeId: '12345',
          place_id: '12345',
          device_id: 'mock-device-id',
          alias_id: 'mock-alias-id',
          person_id: 'mock-person-id'
        };
      }

      try {
        await (func as any)(mockOptions);

        expect(capturedUrl).not.toBe('');

        const expectedMethod = funcName === 'oauth2Authorize' ? 'GET' : 'POST';
        expect(capturedMethod.toUpperCase()).toBe(expectedMethod);

        if (funcName === 'token' || funcName === 'oauth2Authorize') {
          expect(capturedUrl).toContain('https://oauth.hanet.com');
        } else {
          expect(capturedUrl).toContain('https://partner.hanet.ai');
        }

        if (funcName !== 'oauth2Authorize') {
          const contentType = capturedHeaders['content-type'] || '';
          const isValidContentType =
            contentType.includes('application/x-www-form-urlencoded') ||
            contentType.includes('multipart/form-data');
          expect(isValidContentType).toBe(true);
        }

        const cleanFuncName = funcName.toLowerCase();
        const isSpecialPath = ['token', 'oauth2authorize'].includes(cleanFuncName);

        if (!isSpecialPath) {
          const urlObj = new URL(capturedUrl);
          const segments = urlObj.pathname.toLowerCase().split('/').filter(Boolean);

          for (const segment of segments) {
            const cleanSegment = segment.replace(/[-_]/g, '');
            expect(cleanFuncName).toContain(cleanSegment);
          }
        }

      } catch (error) {
        console.error(`Failed to verify API function ${funcName}:`, error);
        throw error;
      }
    }
  });
});

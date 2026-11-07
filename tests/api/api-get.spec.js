
import { test, expect } from '../../fixtures/api.fixture.js';
import { JsonUtils } from '../../utils/jsonUtils.js';

    // GET API
    test('GET - Fetch post and validate response', async ({ api }) => {

        const response = await api.get('/posts/1');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.id).toBe(1);
        expect(body.title).toBeTruthy();
        expect(body.userId).toBe(1);

        expect(response.headers()['content-type'])
            .toContain('application/json');

        JsonUtils.writeJson('api-responses/get-response.json', body);

        console.log('GET Response:', body);
    });

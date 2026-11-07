
import { test, expect } from '../../fixtures/api.fixture.js';
import { JsonUtils } from '../../utils/jsonUtils.js';

test.describe.configure({ mode: 'serial' });

test('GET - Fetch post and validate response', async ({ api }) => {
    const response = await api.get('/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual(expect.objectContaining({
        id: 1,
        title: expect.any(String),
        body: expect.any(String),
        userId: 1
    }));

    expect(response.headers()['content-type']).toContain('application/json');

    JsonUtils.writeJson(`api-responses/get-response-${Date.now()}.json`, body);
});
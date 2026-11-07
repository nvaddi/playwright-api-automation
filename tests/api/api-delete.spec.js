import { test, expect } from '../../fixtures/api.fixture.js';
import { JsonUtils } from '../../utils/jsonUtils.js';

test.describe.configure({ mode: 'serial' });

test('DELETE - Delete post', async ({ api }) => {
    const response = await api.delete('/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual({});

    JsonUtils.writeJson(`api-responses/delete-response-${Date.now()}.json`, body);
});
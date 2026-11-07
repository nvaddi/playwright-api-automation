import { test, expect } from '../../fixtures/api.fixture.js';
import { JsonUtils } from '../../utils/jsonUtils.js';

test.describe.configure({ mode: 'serial' });

test('PUT - Update complete post', async ({ api }) => {
    const updatedData = {
        id: 1,
        title: 'Updated Post Title',
        body: 'Updated Post Body',
        userId: 1
    };

    const response = await api.put('/posts/1', updatedData);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual(expect.objectContaining({
        id: 1,
        title: updatedData.title,
        body: updatedData.body,
        userId: 1
    }));

    JsonUtils.writeJson(`api-responses/put-response-${Date.now()}.json`, body);
});
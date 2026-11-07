import { test, expect } from '../../fixtures/api.fixture.js';
import { JsonUtils } from '../../utils/jsonUtils.js';

test.describe.configure({ mode: 'serial' });

test('PATCH - Update post title only', async ({ api }) => {
    const patchData = {
        title: 'Partially Updated Title'
    };

    const response = await api.patch('/posts/1', patchData);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual(expect.objectContaining({
        id: 1,
        title: patchData.title
    }));

    JsonUtils.writeJson(`api-responses/patch-response-${Date.now()}.json`, body);
});

import { test, expect } from '../../fixtures/api.fixture.js';
import { JsonUtils } from '../../utils/jsonUtils.js';

test.describe.configure({ mode: 'serial' });

test('POST - Create new post', async ({ api }) => {
    const testData = JsonUtils.readJson('test-data/create-post.json');

    const response = await api.post('/posts', testData);

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toEqual(expect.objectContaining({
        id: expect.any(Number),
        title: testData.title,
        body: testData.body,
        userId: testData.userId
    }));

    JsonUtils.writeJson(`api-responses/post-response-${Date.now()}.json`, body);
});

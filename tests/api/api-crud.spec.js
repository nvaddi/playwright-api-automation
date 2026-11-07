import { test, expect } from '../../fixtures/api.fixture.js';
import { JsonUtils } from '../../utils/jsonUtils.js';

test.describe('Playwright API Automation - CRUD', () => {
    test.describe.configure({ mode: 'serial' });

    test('CRUD smoke test for JSONPlaceholder posts', async ({ api }) => {
        const seedId = 1;

        const createPayload = {
            title: 'CRUD smoke test title',
            body: 'CRUD smoke test body',
            userId: 1
        };

        const createResponse = await api.post('/posts', createPayload);
        expect(createResponse.status()).toBe(201);

        const createdBody = await createResponse.json();
        expect(createdBody).toEqual(expect.objectContaining({
            id: expect.any(Number),
            title: createPayload.title,
            body: createPayload.body,
            userId: createPayload.userId
        }));

        const getResponse = await api.get(`/posts/${seedId}`);
        expect(getResponse.status()).toBe(200);

        const getBody = await getResponse.json();
        expect(getBody).toEqual(expect.objectContaining({
            id: seedId,
            title: expect.any(String),
            body: expect.any(String),
            userId: 1
        }));

        const updatedData = {
            id: seedId,
            title: 'Updated Post Title',
            body: 'Updated Post Body',
            userId: 1
        };

        const putResponse = await api.put(`/posts/${seedId}`, updatedData);
        expect(putResponse.status()).toBe(200);

        const putBody = await putResponse.json();
        expect(putBody).toEqual(expect.objectContaining({
            id: seedId,
            title: updatedData.title,
            body: updatedData.body,
            userId: 1
        }));

        const patchData = { title: 'Partially Updated Title' };
        const patchResponse = await api.patch(`/posts/${seedId}`, patchData);
        expect(patchResponse.status()).toBe(200);

        const patchBody = await patchResponse.json();
        expect(patchBody).toEqual(expect.objectContaining({
            id: seedId,
            title: patchData.title,
            userId: 1
        }));

        const deleteResponse = await api.delete(`/posts/${seedId}`);
        expect(deleteResponse.status()).toBe(200);

        const deleteBody = await deleteResponse.json();
        expect(deleteBody).toEqual({});

        JsonUtils.writeJson(`api-responses/crud-flow-${Date.now()}.json`, {
            createdBody,
            getBody,
            putBody,
            patchBody,
            deleteBody
        });
    });
});
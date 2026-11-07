
import { test as base } from '@playwright/test';
import { ApiClient } from '../utils/apiClient.js';

export const test = base.extend({

    api: async ({ request }, use) => {

        const apiClient = new ApiClient(request);

        await use(apiClient);

    }

});

export { expect } from '@playwright/test';
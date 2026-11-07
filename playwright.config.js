
import { defineConfig } from '@playwright/test';
import { ENV } from './config/env.js';

export default defineConfig({
    testDir: './tests/api',

    timeout: 60000,
    retries: 0,
    workers: 1,
    fullyParallel: false,
    reporter: 'html',

    use: {
        baseURL: ENV.BASE_URL,
        extraHTTPHeaders: {
            'Accept': 'application/json'
        }
    }
});
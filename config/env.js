
import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    BASE_URL: process.env.BASE_URL,
    API_TIMEOUT: Number(process.env.API_TIMEOUT || 30000)
};
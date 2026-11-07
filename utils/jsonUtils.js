
import fs from 'fs';
import path from 'path';

export class JsonUtils {

    static readJson(filePath) {
        const fullPath = path.resolve(filePath);
        const data = fs.readFileSync(fullPath, 'utf-8');
        return JSON.parse(data);
    }

    static writeJson(filePath, data) {
        const fullPath = path.resolve(filePath);

        // Create directory if it doesn't exist
        fs.mkdirSync(path.dirname(fullPath), {
            recursive: true
        });

        fs.writeFileSync(
            fullPath,
            JSON.stringify(data, null, 2),
            'utf-8'
        );
    }
}
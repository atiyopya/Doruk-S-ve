import fs from 'fs';
import path from 'path';

const rootDir = "C:\\Users\\İsmail\\Desktop\\DORUK SÖVE KURUMSAL\\DORUK SÖVE ÜRÜNLER";

function listFiles(dir, level = 0) {
    const indent = '    '.repeat(level);
    const basename = path.basename(dir);
    console.log(`${indent}${basename}/`);

    if (!fs.existsSync(dir)) {
        console.log(`${indent}  (Not Found)`);
        return;
    }

    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            listFiles(fullPath, level + 1);
        } else {
            console.log(`${indent}    ${item}`);
        }
    });
}

listFiles(rootDir);

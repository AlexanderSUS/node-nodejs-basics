import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    const moduleObject = await import('./files/a.json', { assert: { type: 'json' }})
    unknownObject = moduleObject.default;
} else {
    const moduleObject = await import('./files/b.json', { assert: { type: 'json' }})
    unknownObject = moduleObject.default;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename) 

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer };

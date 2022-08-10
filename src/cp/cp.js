import cp from 'child_process';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename) 

    const worker = cp.fork(resolve(__dirname,'files/script.js'), args);
};

spawnChildProcess(process.argv.slice(2));

import os from 'os';
import { Worker } from 'worker_threads';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename) 

    const WORKER_URL = resolve(__dirname, 'worker.js');
    const VALUE = 10;
    const result = [];
    const cpus = os.cpus().length;

    for (let i = 0; i < cpus; i++) {
        const index = i;

        result[index] = new Promise((resolve, reject) => {

            const worker = new Worker(WORKER_URL, {
                workerData: VALUE + index,
            });

            worker.on('message', value => {
                resolve({ status: 'resolved',
                    data: value,
                });
            });

            worker.on('error', () => {
                reject({
                    status: 'error',
                    data: null,
                });
            });
        });
    }
    const data = await Promise.all(result)
    console.log(data);
};

performCalculations();



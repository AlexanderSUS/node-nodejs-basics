import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';

export const performCalculations = async () => {
    const WORKER_URL = path.resolve('wt', 'worker.js');
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

    return Promise.all(result);
};

performCalculations()
    .then(data => console.log(data));

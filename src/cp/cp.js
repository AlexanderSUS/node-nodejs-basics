import cp from 'child_process';

export const spawnChildProcess = async (args) => {
    const worker = cp.fork('./cp/files/script.js', args);
};

spawnChildProcess(process.argv.slice(2));

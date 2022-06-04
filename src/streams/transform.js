import fs from 'fs';
import process from 'process';
 
export const transform = async () => {
    process.stdin.pipe(process.stdout);
    process.stdin.resume()
};

transform();

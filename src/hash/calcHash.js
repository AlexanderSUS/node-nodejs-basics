import { createHash } from 'crypto'
import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename) 

  const TARGET_FILE = 'fileToCalculateHashFor.txt';
  const soursePath = resolve(__dirname, 'files', TARGET_FILE);

  fs.readFile(soursePath, 'utf-8' , (err, data) => {
    if (err) {
      console.error(err);
    }

    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
  });
};

calculateHash();

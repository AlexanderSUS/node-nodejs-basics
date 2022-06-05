import { createHash } from 'crypto'
import path from 'path';
import fs from 'fs';

export const calculateHash = async () => {
  const BASE_URL = 'src/hash/files';
  const TARGET_FILE = 'fileToCalculateHashFor.txt';
  const soursePath = path.resolve(BASE_URL, TARGET_FILE);

  fs.readFile(soursePath, 'utf-8' , (err, data) => {
    if (err) {
      console.error(err);
    }

    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
  });
};

calculateHash();

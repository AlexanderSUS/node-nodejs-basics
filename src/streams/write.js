import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename) 
  const TARGET_FILE = 'fileToWrite.txt';
  const FILE_URL = resolve(__dirname, 'files', TARGET_FILE);

  const file = fs.createWriteStream(FILE_URL)

  process.stdin.pipe(file);

  process.stdin.resume();
  
};

write();

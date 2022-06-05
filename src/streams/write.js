import fs from 'fs';
import { resolve } from 'path';

export const write = async () => {
  const TARGET_DIR = 'src/streams/files';
  const TARGET_FILE = 'fileToWrite.txt';
  const FILE_URL = resolve(TARGET_DIR, TARGET_FILE);

  const file = fs.createWriteStream(FILE_URL)

  process.stdin.pipe(file);

  process.stdin.resume();
  
};

write();

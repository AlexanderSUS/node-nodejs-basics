import fs from 'fs';
import process from 'process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
  const SOURCE_DIR = 'files';
  const CURRENT_DIR_URL = dirname(fileURLToPath(import.meta.url));
  const SOURSE_FILE = 'fileToRead.txt';
  
  const readStream = fs.createReadStream(path.resolve(CURRENT_DIR_URL, SOURCE_DIR, SOURSE_FILE));
  readStream.on('open', () => { readStream.pipe(process.stdout); });
};

read();

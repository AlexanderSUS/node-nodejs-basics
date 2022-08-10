import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename) 
  const FILE_NAME = 'fileToRead.txt';

  const soursePath = resolve(__dirname, 'files', FILE_NAME);

  if (!fs.existsSync(soursePath)) {
    console.error(new Error('FS operation failed'));
  }

  fs.readFile(soursePath, 'utf-8' , (err, data) => {
    if (err) {
      console.error(new Error(err));
    }

    console.log(data);
  })
};

read();

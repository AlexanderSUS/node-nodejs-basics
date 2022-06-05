import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename) 
  const soursePath = resolve(__dirname, 'files');

  if (!fs.existsSync(soursePath)) {
    console.error(new Error('FS operation failed'));
  }

  fs.readdir(soursePath, (err, files) => {
    if (err) {
      console.error(new Error(err));
    };

    files.forEach((file) => {
        console.log(file);
    })
  });
};

list();

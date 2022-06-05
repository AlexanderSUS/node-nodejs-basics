import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';


export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename) 
  const OLD_NAME = 'wrongFilename.txt';
  const NEW_NAME = 'properFilename.md';

  const oldSourceUrl = resolve(__dirname, 'files', OLD_NAME);
  const newSourceUrl = resolve(__dirname, 'files', NEW_NAME);

  if (!fs.existsSync(oldSourceUrl) || fs.existsSync(newSourceUrl)) {
    console.error(new Error('FS operation failed'));
  }

  fs.rename(oldSourceUrl, newSourceUrl, (err) => {
    if (err) {
      console.error(new Error(err));
    }
  });
};

rename();

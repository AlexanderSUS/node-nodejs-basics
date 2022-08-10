import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename) 

  const FILE_FOR_REMOVE = 'fileToRemove.txt'

  const fileUrl = resolve(__dirname, 'files', FILE_FOR_REMOVE);

  if (!fs.existsSync(fileUrl)) {
    console.error(new Error('FS operation failed'));
  } 

  fs.unlink(fileUrl, (err) => {
    if (err) {
      console.error(new Error(err));
    };
  })
};

remove();

import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';


export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename) 
  const FILE_NAME = 'fresh.txt';

  const fileUrl = resolve(__dirname, 'files', FILE_NAME);
  const content = 'I am fresh and young';

  if (fs.existsSync(fileUrl)) {
    console.error(new Error('FS operation failed'));
  } 

  fs.writeFile(fileUrl, content, err => {
    if (err) {
      console.error(new Error(err))
    }
  })
};

create();

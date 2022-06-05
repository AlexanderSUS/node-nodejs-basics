import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename) 

  const SOURCE = 'files';
  const DESTINATION = 'files_copy';

  const getSoursePath = (fileName = '') => resolve(__dirname, SOURCE, fileName)
  const getDestPath = (fileName = '') => resolve(__dirname, DESTINATION, fileName)

  if (!fs.existsSync(getSoursePath()) || fs.existsSync(getDestPath())) {
    console.error(new Error('FS operation failed'));
  }

  fs.mkdirSync(getDestPath());

  fs.readdir(getSoursePath(), (err, files) => {
    if (err) {
      console.error(new Error(err))
    };

    files.forEach((file) => {
      fs.copyFile(getSoursePath(file), getDestPath(file), (err) => {
        if (err) {
          console.error(new Error(err))
        };
      })
    })
  });
};

copy();

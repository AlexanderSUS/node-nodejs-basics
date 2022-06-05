import fs from 'fs';
import path from 'path';

export const read = async () => {
  const BASE_URL = 'src/fs/files';
  const FILE_NAME = 'fileToRead.txt';

  const soursePath = path.resolve(BASE_URL, FILE_NAME);

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

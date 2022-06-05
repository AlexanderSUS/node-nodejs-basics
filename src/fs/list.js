import fs from 'fs';
import path from 'path';

export const list = async () => {
  const BASE_URL = 'src/fs/files';
  const soursePath = path.resolve(BASE_URL);

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

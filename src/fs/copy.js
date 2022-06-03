import fs from 'fs';
import path from 'path';

export const copy = async () => {
  const BASE_URL = 'src/fs';
  const SOURCE = 'files';
  const DESTINATION = 'files_copy';

  const getSoursePath = (fileName = '') => path.resolve(BASE_URL, SOURCE, fileName)
  const getDestPath = (fileName = '') => path.resolve(BASE_URL, DESTINATION, fileName)

  if (!fs.existsSync(getSoursePath()) || fs.existsSync(getDestPath())) {
    throw new Error('FS operation failed')
  }

  fs.mkdirSync(getDestPath());

  fs.readdir(getSoursePath(), (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      fs.copyFile(getSoursePath(file), getDestPath(file), (err) => {
        if (err) throw err;
      })
    })
  });
};

copy();

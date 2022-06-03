import fs from 'fs';
import path from 'path';

export const rename = async () => {
  const URL = 'src/fs/files';
  const OLD_NAME = 'wrongFilename.txt';
  const NEW_NAME = 'properFilename.md';

  const oldSourceUrl = path.resolve(URL, OLD_NAME);
  const newSourceUrl = path.resolve(URL, NEW_NAME);

  if (!fs.existsSync(oldSourceUrl) || fs.existsSync(newSourceUrl)) {
    throw new Error('FS operation failed')
  }

  fs.rename(oldSourceUrl, newSourceUrl, (err) => {
    if (err) {
      throw err;
    }
  });
};

rename();

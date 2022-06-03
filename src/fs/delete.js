import fs from 'fs';
import path from 'path';

export const remove = async () => {
  const BASE_URL = 'src/fs/files'
  const FILE_FOR_REMOVE = 'fileToRemove.txt'

  const fileUrl = path.resolve(BASE_URL, FILE_FOR_REMOVE);

  if (!fs.existsSync(fileUrl)) {
    throw new Error('FS operation failed')
  } 

  fs.unlink(fileUrl, (err) => {
    if (err) throw err;
  })
};

remove();

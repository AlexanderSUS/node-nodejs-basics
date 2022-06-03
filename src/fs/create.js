import fs from 'fs';
import path from 'path';

export const create = async () => {
  const BASE_URL = 'src/fs/files'
  const FILE_NAME = 'fresh.txt';

  const fileUrl = path.resolve(BASE_URL, FILE_NAME);
  const content = 'I am fresh and young';

  if (fs.existsSync(fileUrl)) {
    throw new Error('FS operation failed')
  } 

  fs.writeFile(fileUrl, content, err => {
    if (err) {
      console.log(err)
    }
  })
};

create();

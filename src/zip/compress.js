import fs from 'fs';
import { resolve } from 'path';
import zlib from 'zlib';

export const compress = async () => {
  const TARGET_DIR = 'src/zip/files';
  const FILE_TO_COMPRESS = 'fileToCompress.txt';
  const COMPRESSED_FILE = 'archive.gz';

  const gzip = zlib.createGzip();
  const getFileUrl = (fileName) => resolve(TARGET_DIR, fileName);

  const input = fs.createReadStream(getFileUrl(FILE_TO_COMPRESS))
  const output = fs.createWriteStream(getFileUrl(COMPRESSED_FILE))

  input.pipe(gzip).pipe(output);
};

compress();

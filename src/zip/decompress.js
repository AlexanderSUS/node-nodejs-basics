import fs from 'fs';
import { resolve } from 'path';
import zlib from 'zlib';


export const decompress = async () => {
  const TARGET_DIR = 'src/zip/files';
  const COMPRESSED_FILE = 'archive.gz';
  const UNCOMPRESSED_FILE = 'fileToCompress.txt';

  const gzip = zlib.createGunzip();
  const getFileUrl = (fileName) => resolve(TARGET_DIR, fileName);

  const input = fs.createReadStream(getFileUrl(COMPRESSED_FILE))
  const output = fs.createWriteStream(getFileUrl(UNCOMPRESSED_FILE))

  input.pipe(gzip).pipe(output);
};

decompress();

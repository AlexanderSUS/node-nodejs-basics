import { Transform, pipeline } from 'stream';

export const transform = async () => {
    const readable = process.stdin;
    const writable = process.stdout;

    const transformStream = new Transform({
        transform(chunk, enc, cb) {
            const chunkString = chunk.toString();

            const revertedChunckString = chunkString.split('').reverse().join("");

            this.push(revertedChunckString);

            cb();
        }
    })

    pipeline(readable, transformStream, writable, err => {
        console.log(`Error: ${err}`);
    })

};

transform();

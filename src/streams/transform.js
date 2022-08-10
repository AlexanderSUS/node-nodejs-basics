export const transform = async () => {
    process.stdin.pipe(process.stdout);
    process.stdin.resume()
};

transform();

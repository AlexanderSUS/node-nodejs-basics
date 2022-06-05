export const parseArgs = () => {
    const args = proces.argv.slice(2)

    for (let i = 0; i < args.length; i++) {
        console.log(`${args[i].slice(2)} is ${args[++i]}`);
    }
};

parseArgs();

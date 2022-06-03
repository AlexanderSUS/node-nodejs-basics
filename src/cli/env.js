import { env } from 'node:process'

export const parseEnv = () => {
    const PREFIX = 'RSS_'
    const envKeys = Object.keys(env);
    const rssKeys = envKeys.filter((key) => key.startsWith(PREFIX))

    if (!rssKeys.length) {
        console.error('Environment variables with RSS_ prefix has not found');
        return;
    }

    rssKeys.forEach((key) => console.log(`${key}=${env[key]}`));
};

parseEnv();

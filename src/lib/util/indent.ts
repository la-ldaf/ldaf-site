export default (str: string, level: number) => str.replaceAll(/^/gm, `${" ".repeat(level)}`);

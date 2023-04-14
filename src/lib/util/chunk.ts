// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_chunk
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chunk = <T>(input: T[], size: number): T[][] =>
  input.reduce<T[][]>(
    (arr, item, i) =>
      i % size === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]],
    []
  );

export default chunk;

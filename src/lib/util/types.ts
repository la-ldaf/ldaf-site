// Expand and ExpandRecursively are used for debugging - Expand<T> will show the most detailed
// contract of T that it can, and ExpandRecursively<T> will do so recursively into items,
// properties, args, and return values
export type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
  ? { [K in keyof O]: O[K] }
  : never;
export type ExpandRecursively<T> = T extends (...args: infer A) => infer R
  ? (...args: ExpandRecursively<A>) => ExpandRecursively<R>
  : T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;

export type AnyMap<K, V> = Map<K, V> | (K extends object ? WeakMap<K, V> : never);

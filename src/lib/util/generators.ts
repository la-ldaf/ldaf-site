export function* map<T, U>(arr: Iterable<T>, fn: (item: T) => U): Generator<U, void> {
  for (const item of arr) {
    yield fn(item);
  }
}

export function* filter<T>(arr: Iterable<T>, fn: (item: T) => boolean): Generator<T, void> {
  for (const item of arr) {
    if (fn(item)) yield item;
  }
}

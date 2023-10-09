export default function isNotNull<T>(item: T): item is NonNullable<T> {
  return item !== null && item !== undefined;
}

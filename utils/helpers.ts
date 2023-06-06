export function any<T>(arr: Array<T>, predicate: (x: T) => boolean) {
  return arr.map(predicate).includes(true)
}

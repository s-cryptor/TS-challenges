type IsTuple<T>= [T] extends [never]
  ? false
  : T extends ReadonlyArray<unknown>
    ? number extends T['length']
      ? false
      : true
    : false

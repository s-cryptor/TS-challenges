type ObjectToUnion<T> = T[keyof T]
type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>
type ObjectEntries<T> = ObjectToUnion<{
  [K in keyof T]-?: [K, RemoveUndefined<T[K]>]
}>
  

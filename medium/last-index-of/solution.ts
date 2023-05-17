type IsEqual<T, U> = U extends T ? T extends U ? true : false : false
type LastIndexOf<T extends any[], U> = T extends [...infer L, infer R]
  ? IsEqual<R, U> extends true
    ? L['length']
    : LastIndexOf<L, U> 
  : -1

type Zip<T, U> = T extends [infer FirstT, ...infer RestT]
  ? U extends [infer FirstU, ...infer RestU]
    ? [[FirstT, FirstU], ...Zip<RestT, RestU>]
    : []
  : []
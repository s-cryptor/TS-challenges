type All<T extends any[], R> = T extends [infer First, ...infer Rest]
  ? Equal<First, R> extends true
    ? All<Rest, R>
    :false
  : true

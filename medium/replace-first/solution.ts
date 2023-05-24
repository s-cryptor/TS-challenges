type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [infer First, ...infer Rest]
  ? First extends S
    ? [R, ...Rest]
    : [First, ...ReplaceFirst<Rest, S, R>]
  : T

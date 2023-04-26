type Flatten<T> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [T]
  

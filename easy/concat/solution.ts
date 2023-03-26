type Concat<T, U> = T extends readonly [...infer TRest]
  ? U extends readonly [...infer URest]
    ? [...TRest, ...URest]
    : []
  : []
 

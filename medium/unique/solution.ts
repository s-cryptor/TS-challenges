type Includes<T, U> = U extends [infer F, ...infer Rest] 
  ? Equal<F, T> extends true 
    ? true 
    : Includes<T, Rest> 
  : false;

type Unique<T, U extends any[] = []> = 
  T extends [infer R, ...infer F]
    ? Includes<R, U> extends true
      ? Unique<F, [...U]>
      : Unique<F, [...U, R]>
    : U
  

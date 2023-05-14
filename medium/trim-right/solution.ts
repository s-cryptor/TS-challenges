type TrimRight<S extends string> = S extends `${infer F}${'\t' | '\n' | ' '}` ? TrimRight<F> : S
  

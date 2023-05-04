type DropChar<S, C extends string> = S extends `${infer F}${C}${infer L}`
  ? DropChar<`${F}${L}`, C>
  : S
  

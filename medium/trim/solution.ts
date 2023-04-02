type Trim<S extends string> =
  S extends `${' ' | '\t' | '\n'}${infer L}`
    ? Trim<L>
    : S extends `${infer F}${' ' | '\t' | '\n'}`
      ? Trim<F>
      : S
  

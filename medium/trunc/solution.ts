type Trunc<S extends string | number> = `${S}` extends `${infer F}.${any}`
  ? F extends '' ? '0' : F
  : `${S}`
  

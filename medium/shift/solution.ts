type Shift<T extends readonly any[]> = T extends [infer First, ...infer Rest] ? [...Rest] : []
  

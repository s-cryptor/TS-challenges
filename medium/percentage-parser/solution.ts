type PercentageParser<A extends string> =
  A extends `${infer S extends '-' | '+'}${infer N}%`
    ? [`${S}`, `${N}`, '%']
    : A extends `${infer S extends '-' | '+'}${infer N}`
      ? [`${S}`, `${N}`, '']
      : A extends `${infer N}%`
        ? ['', `${N}`, '%']
        : A extends `${infer N}`
          ? ['', `${N}`, '']
          : ['', '', '']
  

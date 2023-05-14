type StringToUnion<S extends string> =
  S extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never

type AllCombinations<
  Str extends string,
  S extends string = String2Union<Str>,
> = [S] extends [never]
  ? ''
  : '' | { [K in S]: `${K}${AllCombinations<never, Exclude<S, K>>}` }[S]

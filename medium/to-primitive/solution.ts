type ToPrimitive<T> = T extends object ? {
  [Key in keyof T]: ToPrimitive<T[Key]>
} : (
  T extends { valueOf: () => infer P } ? P : T
)

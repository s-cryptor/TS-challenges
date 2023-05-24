type DeepMutable<T extends Record<string, any>> = T extends (...args: any[]) => any
  ? T
  : { - readonly [K in keyof T]: DeepMutable<T[K]> }

type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer ConcreteKey}` ? ConcreteKey : never]: T[K]
}
  

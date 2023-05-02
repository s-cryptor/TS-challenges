type IsUnion<U, U1 = U> = Equal<(U extends any ? U1 extends U ? true : false : false), boolean>
  

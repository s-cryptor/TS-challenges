type CheckRepeatedChars<T extends string> = 
  T extends `${infer X}${infer Y extends string}`
    ? Y extends `${string}${X}${string}`
      ? true 
      : CheckRepeatedChars<Y>
    : false
  

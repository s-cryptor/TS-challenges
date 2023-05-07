type PartialByKeys<T extends {}, U extends keyof T = keyof T> = 
  Omit<Partial<Pick<T, U & keyof T>> & Omit<T, U & keyof T>, never>;

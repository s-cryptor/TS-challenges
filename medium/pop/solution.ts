type Pop<T extends any[]> = T extends [...infer First, any] ? First : []
  

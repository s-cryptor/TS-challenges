type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never  

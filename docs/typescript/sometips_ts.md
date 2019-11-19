# someTips

1. TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。

2. TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。   

TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。

如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。关于 tsconfig.json，可以在官方文档查阅。

# ts 基础

## 类型

```javascript
let isDone: boolean = false; // 布尔值
let decLiteral: number = 6;  // 数值
let myName: string = 'Tom';  //字符串

// 空值
//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('My name is Tom');
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;

// undefined和null
let u: undefined = undefined;
let n: null = null;

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u: undefined;
let num: number = u;
// 而 void 类型的变量不能赋值给 number 类型的变量：
let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.
```

## 任意值
any 类型，则允许被赋值为任意类型。
```javascript
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```
在任意值上访问任何属性都是允许的，也允许调用任何方法：
```javascript
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
```

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
```javascript
let something;
something = 'seven';
something = 7;

something.setName('Tom');

// 等价于
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
```

## 类型推论
如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

以下代码虽然没有指定类型，但是会在编译的时候报错：
```javascript
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

// 等价于
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

如果定义时没有赋值，则推断为any类型
```javascript
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

## 联合类型
联合类型使用 | 分隔每个类型。
```javascript
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

访问联合类型的属性或方法
当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
```javascript
function getLength(something: string | number): number {
    return something.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
// length 不是string 和 number 的公共属性


function getString(something: string | number): string {
    return something.toString();
}
// toString是string 和 number的公共属性


// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5  被推断成了 string
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错 被推断成了 number

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

## 对象的类型————接口

```javascript
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

// 定义的变量比接口少了一些属性是不允许的,多一些属性也是不允许的：
// 赋值的时候，变量的形状必须和接口的形状保持一致。
```
### 可选属性
有时我们希望不要完全匹配一个形状，那么可以用可选属性：
```javascript
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};
// 这时仍然不允许添加未定义的属性：
```

### 任意属性
有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
```javascript
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
// 使用 [propName: string] 定义了任意属性取 string 类型的值。
```

### 只读属性
有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
```javascript
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```
使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了

## 数组类型
### [类型+方括号表示]
```javascript
let fibonacci: number[] = [1, 1, 2, 3, 5];
```
### 数组泛型
```javascript
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```
### 接口表示数组
```javascript
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```
NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。
虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
不过有一种情况例外，那就是它常用来表示类数组

### 类数组
类数组（Array-like Object）不是数组类型，比如 arguments：
```javascript
function sum() {
    let args: number[] = arguments;
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
```
上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
```javascript
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```
在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 length 和 callee 两个属性。

事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
```javascript
function sum() {
    let args: IArguments = arguments;
}
```
### any在数组中的应用
一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
```javascript
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```

## 函数的类型
### 函数声明
一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
```javascript
function sum(x: number, y: number): number {
    return x + y;
}
```
输入多余的（或者少于要求的）参数，是不被允许的：
```javascript
function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2, 3);

// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
```

### 函数表达式
```javascript
let mySum = function (x: number, y: number): number {
    return x + y;
};
```
这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：

```javascript
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```

注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

### 用接口定义函数的形状
我们也可以使用接口的方式来定义一个函数需要符合的形状：

```javascript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

### 可选参数
前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？
与接口中的可选属性类似，我们用 ? 表示可选的参数：
```javascript
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```
需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了

### 参数默认值

在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
```javascript
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```
此时就不受「可选参数必须接在必需参数后面」的限制了：
```javascript
function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
```

### 剩余参数
ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
```javascript
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);
```
事实上，items 是一个数组。所以我们可以用数组的类型来定义它：

```javascript
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);
```
注意，rest 参数只能是最后一个参数，关于 rest 参数

### 重载
```javascript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

### 断言
```
<类型>值 
或
值 as 类型
```
在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。
// 可以直接使用字面量进行类型声明
let a : 1
a = 1 
let b :'hello'
b = "hello"
// 可以使用 | 来定义多个类型(联合类型)
let c : 'male' | 'female'
c = 'male'
c = 'female'

let d : string | boolean
d = 'jijibao'
d = true

// any 表示任意类型的值 一个变量设置为any相当于对TS关闭了类型检查
// 使用TS不建议使用any
// let f :any

// 声明变量如果不指定类型，TS解析器会自动解析为any（隐式的any）
let f
f = 'aa'
f = 1
f = true

// unknown表示未知类型的值
let e :unknown
e = 'as'
e = 12
e = true

let x :string
// f的类型使any，它可以赋值给任意变量
//  x = f

// unknown实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
e = 'hello'
// x = e
if(typeof e === "string"){
    x = e
}

// 类型断言,可以用来告诉解析器unknown的类型
/*
    语法 ：变量 as 类型
           <类型> 变量
*/ 
x = e as string
x = <string>e

// void 用来表示空，一函数为例，还表示没有返回值的函数

function fn() :void{
    return undefined
}

// never表示永远不会返回结果
function fn1():never{
    throw new Error('出错啦')
}

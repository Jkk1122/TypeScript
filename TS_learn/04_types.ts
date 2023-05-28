// object表示一个对象
let a: object
a = {name:'孙悟空'}
a = function(){}

// {}用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后面加上？ 表示属性是可选的
let b:{name:string,age?:number}
b = {name:'孙悟空'}

// [propName:string]:any 表示任意类型的属性
let c:{name:string,[propName:string]:any}
c={name:'sun',age:12,gender:'male'}


// 设置函数结构的类型声明
// 语法：（形参：类型，形参：类型....）=> 返回值类型
let d:(a:number,b:number)=>number
d = function(n1:number,n2:number):number{
    return n1 + n2
}

/*
    数组语法：
    1. 类型[]
    2.Array<类型>
*/ 


// string[]表示字符串数组类型
let e:string[]
e = ['jiji','nale','大小']

// number[]表示数字数组
let f:number[]
f = [1,2,3,4]

// Array<number> 表示数字数组
let g:Array<number>
g = [1,2,3,4,4]

// tuple  元组就是固定长度的数0组
/*
    语法：[类型，类型]
*/

let h :[string,number]
h = ['hello',111]

// 枚举 enum
enum Gender{
    Male = 0,
    Female = 1
}
let i :{name:string,gender: Gender};
i={
    name:'孙悟空',
    gender:Gender.Male
}
console.log(i.gender === Gender.Male);

// &表示同时
let j:{name:string} & {age:number}
j = {name:'11',age:22}

// 类型的别名
type myType = 1|2|3|4|5
let k : myType
let m : myType
k = 1
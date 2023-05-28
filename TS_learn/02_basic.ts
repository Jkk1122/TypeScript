let a:number;  //声明一个变量a，定义为number类型
a=11   
a=34
// a='ddd'  //代码会报错，类型为number  不能赋值为string


let b:string;   //声明一个变量b，定义为string类型
b='wewe'
b='rtt'
// b=1      //代码会报错，类型为string  不能赋值为number

// 声明变量和类型的方法有两种
// 第一   先声明变量指定类型  再进行赋值
let c :boolean;
c =true

// 第二   声明变量的同时进行赋值
let c1 =true
c1 = false
// c1 = 12     //此行代码会报错  boolean不能赋值为number

function sum(a:number,b:number):number{
    return a + b
}
console.log(sum(1,3));
console.log(sum(1,2));



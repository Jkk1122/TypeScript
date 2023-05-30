// object表示一个对象
var a;
a = { name: '孙悟空' };
a = function () { };
// {}用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后面加上？ 表示属性是可选的
var b;
b = { name: '孙悟空' };
// [propName:string]:any 表示任意类型的属性
var c;
c = { name: 'sun', age: 12, gender: 'male' };
// 设置函数结构的类型声明
// 语法：（形参：类型，形参：类型....）=> 返回值类型
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/*
    数组语法：
    1. 类型[]
    2.Array<类型>
*/
// string[]表示字符串数组类型
var e;
e = ['jiji', 'nale', '大小'];
// number[]表示数字数组
var f;
f = [1, 2, 3, 4];
// Array<number> 表示数字数组
var g;
g = [1, 2, 3, 4, 4];
// tuple  元组就是固定长度的数0组
/*
    语法：[类型，类型]
*/
var h;
h = ['hello', 111];
// 枚举 enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);

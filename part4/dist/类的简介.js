"use strict";
// Classi定义一个类
/*
        属性，方法
*/
class Person {
    constructor() {
        // 直接定义的为实例属性，需要通过对象的实例来访问
        this.name = '孙文';
        // 在属性面前加上readonly  表示只读 不能修改
        this.car = '奔驰';
    }
    //定义方法
    //实例方法
    sayHello() {
        console.log('hello');
    }
    // 类方法 （静态方法）
    static saySix() {
        console.log(66666);
    }
}
// 在属性前面加static关键字可以定义类属性（静态属性）（类属性）
Person.age = 23;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);
per.sayHello();
Person.saySix();

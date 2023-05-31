"use strict";
class Dog {
    //construtor构造函数
    // 构造函数会在对象创建的时候调用 
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // 实例方法中，this指的就是当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建对象中添加属性 
        console.log(this, '我是构造函数的this');
    }
    ;
    sayHello() {
        // this就表示调用方法的对象
        console.log(`${this.name}在叫~~`);
    }
}
const dog = new Dog('旺财', 33);
console.log(dog);
const dog1 = new Dog('花花', 32);
dog.sayHello();
dog1.sayHello();

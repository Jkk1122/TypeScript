"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log(`${this.name}在叫`);
        }
    }
    class Dog extends Animal {
        // 如果在子类中写了构造函数,必须调用父类构造函数
        constructor(name, age) {
            super(name); //调用父类构造函数  
            this.age = age;
        }
        sayHello() {
            // 在类的方法中super就表示当前类的父亲
            super.sayHello();
        }
    }
    const dog = new Dog('jjj', 4);
    console.log(dog);
    dog.sayHello();
})();

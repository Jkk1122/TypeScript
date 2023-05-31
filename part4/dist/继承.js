"use strict";
(function () {
    // 创建一个类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(`${this.name}在叫~~`);
        }
    }
    /*
        Dog extends Animal
        此时 Animal被称为父类 Dog被称为子类
        使用继承后,子类将会拥有父类所有的方法和属性
        通过继承,可以将多个类重复的代码写在一个类中
        只需一次就可以让所有子类同时拥有所有的方法和属性
        如果希望在子类添加一些父类没有的属性或方法直接加就行
        父类子类方法重名,子类会覆盖父类方法
        上述覆盖掉方法的形式叫做方法的重写
    */
    // 定义一个Dog类
    // 使Dog类继承Animal类
    class Dog extends Animal {
        sayHello() {
            console.log('狗狗闭嘴了');
        }
        run() {
            console.log(`${this.name} is running`);
        }
    }
    class Cat extends Animal {
        run() {
            console.log(`${this.name} is running`);
        }
    }
    // 定义一个Cat类
    // 使Cat类继承Animal类
    const dog = new Dog('旺财', 23);
    console.log(dog);
    dog.sayHello();
    dog.run();
    const cat = new Cat('mimi', 23);
    console.log(cat);
    cat.sayHello();
    cat.run();
})();

"use strict";
(function () {
    /*
        定义类时,可以使类去实现一个接口
        实现接口就是,使类满足接口
    */
    class Myclass {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sayHello() {
            console.log('hello,world');
        }
    }
    const obj1 = {
        name: 'jijiba',
        age: 23,
        gender: 'nan'
    };
    const obj = {
        name: 'ww',
        age: 3
    };
})();

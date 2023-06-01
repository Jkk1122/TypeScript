"use strict";
(function () {
    // 类创建的语法糖
    class A {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }
    const a = new A('222', 222, 'nan');
    console.log(a);
    class Person {
        constructor(name, age, gender) {
            this.name = name,
                this._age = age,
                this.gender = gender;
        }
        // 创建方法使私有属性可以被外部访问
        // get
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    // 创建Person的子类
    class Son extends Person {
        // protected修饰的属性，在子类可以被访问到
        hisGender() {
            console.log(this.gender);
        }
    }
    const person = new Person('jia', 22, '男');
    console.log(person);
    // name公共属性可以随意修改
    person.name = 'jijibao';
    // 年龄属性数据的设置受到保护
    person.age = 20;
    console.log(person);
    // console.log(person.gender);    //不能访问到受保护属性修饰的数据
    const son = new Son('bb', 67, '女');
    //通过方法在外部访问 受保护属性
    son.hisGender();
})();

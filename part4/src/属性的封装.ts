(function(){

    // 类创建的语法糖
    class A{
        constructor(public name:string,public age:number,public gender:string){}
    }
    const a = new A('222',222,'nan')
    console.log(a);
    


    class Person{
        /*
            public 公有属性，它所修饰的属性可以在任意位置访问（修改）  默认值
            private 私有属性 私有属性只能在类内进行访问
                        -通过类添加方法，使私有属性修饰的属性在外部被访问
            protected 受保护的属性，只能在当前类和当前类的子类中使用
        */ 
        public name:string
        private _age:number
        protected gender:string

        constructor(name:string,age:number,gender:string){
            this.name = name,
            this._age = age,
            this.gender = gender
        }

        // 创建方法使私有属性可以被外部访问
        // get
        get age(){
            return this._age
        }
        set age(value:number){
            if(value >= 0){
                this._age = value
            }
        }

    }


    // 创建Person的子类
    class Son extends Person{
        // protected修饰的属性，在子类可以被访问到
        hisGender(){
            console.log(this.gender);
            
        }

    }

    const person = new Person('jia',22,'男')
    console.log(person);
    // name公共属性可以随意修改
    person.name = 'jijibao'
    // 年龄属性数据的设置受到保护
    person.age = 20
    console.log(person);
    // console.log(person.gender);    //不能访问到受保护属性修饰的数据
    const son = new Son('bb',67,'女')
    //通过方法在外部访问 受保护属性
    son.hisGender()
    
    
    
    

})()
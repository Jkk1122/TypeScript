(function(){

    /*
        以abstract开头的类使抽象类
            抽象类与其他类的区别不大,不能用来创建对象
            抽象类就是专门用来被继承的类
    */ 
    /*
        抽象类可以添加抽象方法
    */ 
    abstract class Animal{
        name:string
        constructor(name:string){
            this.name = name
        }
        // 定义一个抽象方法
        //抽象方法使用abstract开头,没有方法体
        // 抽象方法只能定义在抽象类,子类必须对抽象方法进行重写
         abstract sayHello():void;
    }

    class Dog extends Animal{
        

        sayHello(){
            // 在类的方法中super就表示当前类的父亲
            console.log('兴奋的狗狗');
            
        }
    }
    class Cat extends Animal{
        sayHello(){
            console.log('加菲猫');
            
        }
    }
    const dog = new Dog('jjj')
    console.log(dog);
    dog.sayHello()
    
    const cat = new Cat('mimimi')
    cat.sayHello()


    /*
        以下代码无法用抽象类来创建对象
    */
    // let an  = new Animal('蛇')
    // console.log(an);
    
})()
(function(){

    //描述一个对象的类型
    type Mytype = {
        name:string,
        age:number,
    };

    /*
        接口用来定义一个类结构,用来定义一个类中应该包含那些属性和方法
        同时,接口可以当成类型声明
    */ 
   interface myInterface{
        name:string,
        age:number
   }
   interface myInterface{
        gender:string
   }

    /*
        接口可以在定义类的时候去限制类的结构
        接口中的所有属性都不能有具体的值实际的值
        接口只定义对象的结构,不考虑实际值
        在接口中,所有的方法都是抽象方法
    */    
   interface myInter{
        name:string,
        
        sayHello():void;
   }

    /*
        定义类时,可以使类去实现一个接口
        实现接口就是,使类满足接口
    */    
    class Myclass implements myInterface{
        name:string;
        age:number;
        gender:string;

        constructor(name:string,age:number,gender:string){
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHello(){
            console.log('hello,world');
            
        }
    }



    const obj1:myInterface = {
        name:'jijiba',
        age:23,
        gender:'nan',
    }

    const obj:Mytype = {
        name:'ww',
        age:3,
    }

})()
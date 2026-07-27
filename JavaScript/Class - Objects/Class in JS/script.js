// [ === Class In JavaScript === ]
// class - Template, BluePrint
// class is a program-code template for creating object
// thos objects will have some (variables) & some behaviour (fuctions) inside it

class myClass {
    constructor(room) {
        console.log("Constructor");
        this.room = room;
    }
    
    method(){
        console.log("This is a methode");
    }
}
let obj = new myClass();
let obj2 = new myClass("2");
// [ === Constructor === ]
// constuctor() method is :
// automatic invoked by new
// general work - initizes object creating time
// can pass argument 1 or more

class car {
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    
    setBrand(brand){
        this.brand = brand;
    }
}
let fortuner = new car();
fortuner.brand("fortuner");
let alto = new car();
/* Console
> fortuner
> typeof fortuner // object
> fortuner.start()
> fortuner.stop()
*/

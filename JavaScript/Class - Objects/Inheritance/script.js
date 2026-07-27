// [ === Inharitance === ]
// inharitance is passing down properties & methods from parant class to child class
/*
class perent{
    // code
}
class child extends perent{
    // code
}
*/
// IMP - if child & perent have same methode so chids method will be used
// [method overriding]

class parent {
    hello(){
        console.log("hello");
    }
}

class child extends parent {
    
}
let obj = new child();
/*
> obj
> obj.hello()
> obj.abc() // error - not function
*/

class calculate {
    constructor() {
        console.log("Calculate your numbers");
    }
    add(num1, num2){
        console.log("Additoin = ",num1+num2);
    }
    sub(num1, num2){
        console.log("Substraction = ", num1-num2);
    }
    mul(num1, num2){
        console.log("Multyplication = ",num1*num2);
    }
}

class student extends calculate {
    intro(name){
        console.log("Name : ", name);
    }
}

let std1 = new student();
/*
> std1.intro("aman");
> std1.add(3,6);
> std1.sub(10,5);
> std1.mul(55,55);
*/
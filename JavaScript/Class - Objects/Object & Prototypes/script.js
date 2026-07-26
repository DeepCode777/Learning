// [ === JavaScript Object & Prototype === ]

// a javascript object is an ENTITY having STATE and BEHAVIOR ( store - properties and method)
const student = { // <= Direct way to create object
  fullname : "Deep Poptani",
  marks : 100.00,
  printmarks : function () {
    console.log("marks = ", this.marks);
  },
};
/* console
> student
> student.fullname
> student.marks
> student.printmarks() // error not defind - so use this.marks
*/

// JS object have a special property call prototyp.
// we can set protorype using __proto__
// prototype have its own default object - methon
// ex. array push, remove

/* Console 
=> [Prototype] : object (Please Visite)
> student.printmarks
> student.toString
*/

let employee = {
  calTax(){       // 1] fuction without keyword
    console.log("Tax is 10%");
  },
  calTax2 : function () {         // 2] fuction with keyword
    console.log("Tax is 20%");
  },
};

const karan = {
  salary: 50000,
};
// set protorype using __proto__
karan.__proto__ = employee; // obj.__propt__ = preObj;
/* Console
> karan // with calTax()
> karan.calTax()
--------------------------------------
assing to every new emp every time
 em1.__proto__ = employee;
 em2.__proto__ = employee;
 em.__proto__ = employee;
*/
let arjun = {
  salary: 700000;
  calTax() {
    console.log("Tax is 30%");
  },
};
arjun.__proto__ = employee;
/* console 
> arjun.calTax() // override calTax() - Valid arjun function not employee
*/
// if object & prototype have same method - objects method will br used
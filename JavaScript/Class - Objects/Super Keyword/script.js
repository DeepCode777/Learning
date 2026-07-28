// [ === SUPER Keyword === ]
// used to call the constructor of its parent class to access the aparants properties and methode
// super(arg); // calls parant constuctor
// super.parentMethod(arg);

// IMP - call before (this & exit of child constructor) in child constructor

class person {
    //constructor(name)
    constructor(){
        console.log("Enter Parent constructor");
        this.species = "Homo sapiens";
        //this.name = name;
    }
    eat(){
        console.log("eat");
    }
    work() {
        console.log("Nothing");
    }
}

class engineer extends person {
    constructor(branch) {   // replace branch with name
        console.log("Enter child constructor");
        //super(name);
        super() // to invoke parant class const
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("Solve problem");
    }
}
let eng = new engineer("Computer En.");  // ("aman")
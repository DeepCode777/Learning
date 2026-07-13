/*
// => step 1] :  Creatr new Element
let newBtn = document.createElement("button"); //creat not show
console.log(newBtn); // not show innerText empty
console.log(newBtn.innerText = "click Button");
*/


// => step 2] : Add element
/*
// adds at the end of NOde (insid)
1) node.append(el) 

// adds at the start of NOde (insid)
2) node.prepend(el)

// adds before the node (outside)
3) node.before (el)

// adds after the node (outside)
4) node.after(el)
*/


/*
// newBtn Show with this
let inbody = document.querySelector("body");
inbody.append(newBtn);
*/


/*
// Problem with only div 
let newpara = document.createElement("p");
newpara.innerText = "this is new paragraph for prepend";
let divs = document.querySelector("body");
divs.prepend(newpara);
*/

/*
// Sort cut
let newHeading = document.createElement("h3").innerHTML = "Hello...!";
document.querySelector("body").prepend(newHeading);
*/

/*
let newpara = document.createElement("p");
newpara.innerText = "this is new paragraph for befor";
let divs = document.querySelector("h3");
divs.before(newpara);
*/

/*
let newpara = document.createElement("p");
newpara.innerText = "this is new paragraph for after";
let divs = document.querySelector("h3");
divs.after(newpara);
*/
// => Q-1
let btn = document.createElement("button");
btn.innerText = "click me";

btn.style.backgroundColor="red";
btn.style.color="white"

document.querySelector("body").prepend(btn);

// => Q-2)
let para = document.querySelector("p");
/*
// console => setAttribute for Overright
para.getAttribute("class");
para.setAttribute("class","newStyle");
*/

// console => Merge Two or more Class Prpertis, Not Overright

// para.classList (return Collection)
para.classList.add("newStyle");
// para.classList.remove("existing_class");
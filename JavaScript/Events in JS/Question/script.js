/*
// Q-1 = Change Background Color Togel
let modBtn = document.querySelector("#mode");

let mod = "light-mode";

let mode = () => {
  if(mod === "light-mode"){
    mod = "dark-mode"
    document.querySelector("body").style.backgroundColor="red";
  }else{
    mod = "light-mode"
    document.querySelector("body").style.backgroundColor="black";
  }
}
modBtn.addEventListener("click", mode);
*/
/*
let datk = () => {
  if (mod === "dark-mod") {
    mod = "light-mod";
    console.log("light mode");
  } else {
    mod = "dark-mod";
    console.log("Dark mode");
  }
  console.log(mod);
}
*/
// modBtn.addEventListener("click", dark);


// Q-1 part 2
let btn = document.querySelector("#mode");
let mode = "light" ;

let change = () => {
  if(mode === "light"){
    mode = "dark";
    // document.querySelector("body").setAttribute("class","dark");
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  }else{
    mode = "light";
    // document.querySelector("body").setAttribute("class","light");
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
  }
};

btn.addEventListener("click", change);
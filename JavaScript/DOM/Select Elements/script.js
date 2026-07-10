/*
// 1] selecting element with ID
let itsID = document.getElementById("idName");
console.log(itsID); //#itsID
console.dir(itsID); //#itsID
*/

/*
// 2] selecting element with class
//return - HTML collection
let itsClass = document.getElementsByClassName("className");
console.log(itsClass); // .itsClass
console.dir(itsClass); // .itsClass
*/


/*
// 3] select element with Tag
// return - HTML colection (Tag)
let divs = document.getElementsByTagName("div"); // Tag
console.log(divs); // <Tag>
console.dir(divs);
*/

/*
// QUERY selector
// 1] document.querySelector("myID,myClass,myTag");
// return first element
// 2] document.querySelectorAll("myID,myClass,myTag");
// return a NodeList
let myEle = document.querySelector("p");
let myId = document.querySelector("#h2ID"); // .#idName
let myClass = document.querySelector(".paraClass"); //  .className
console.dir(myEle);
console.dir(myId);
console.dir(myClass);
*/
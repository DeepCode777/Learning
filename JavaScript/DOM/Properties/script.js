/*
=> DOM manipulation
Properties
1] tageName : returns tag for element node
*/
// let firstEL = document.querySelector("#divID");
// console.dir(firstEl);
// first.tageName;
// use with querySelector - variable


/*
2] innerText - returns text contant (in String) of the element and its childdern 
*/
/*
// Childeren Nodes understanig
console.dir(document.body.firstChild);
//Nodes : #text //comment // elements
document.querySelector("div");
// Return HTMLCollection(2)[p,dev]...
document.querySelector("div").children;

// Create ui in HTML
let div = document.querySelector("div");
console.dir(div);
div.innerText
*/

/*
3] inneHTML : return plain text or HTML contents in the elements
HTML Tag Content in String
*/
/*
// Create ui in HTML
let div = document.querySelector("div");
console.dir(div);
div.innerHTML
*/

/* Change Content Using Innertext ot InnerHTML */
// div.innerHTML = "<h2>Heading</h2>";
// div.innertext = "Hello div";

/*
4] textContent : return txtual content Even hidden elements
*/
/*
let head = document.querySelector("h1");
console.dir(head);
head.innerText // ''
head.textContent // show text content
*/
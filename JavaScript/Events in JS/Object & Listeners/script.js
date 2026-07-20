/*
Event
node.event = () => {
  handling
}


event object
node.event = (e) => {
handling
}
*/
/*
let btn = document.querySelector("#dbl");

btn.ondblclick = (e) => {
  console.log(e);         // event object values on console
  console.log(e.type);    //
  console.log(e.target);  // element
  console.log(e.clientX); //
  console.log(e.clientY); //
  console.log(e.screenX); //
  console.log(e.screenY); //
  console.log(e.x);       //
  console.log(e.y);       //
}
*/

//////////////////////////////////
////      Evenet Listener     ////
//////////////////////////////////

// node.addEventListener(event, callback);  //create new memory for add
// node.removeEventListener(event, callback);

// NOTE : the callback reference should be same to remove
/*
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("This From Add Event Listener");
});

btn.addEventListener("click", (e) => {
  console.log("Event Listener Objects : ",e);
  console.log(e.type);
  console.log(e.target);
});*/


// NOTE : the callback reference should be same to remove
// So we pass callback function as variable when we remove same function
/*
let btn = document.querySelector("#btn");
const ev = () => {
  console.log("Event")
};

btn.addEventListener("click", ev);    //mouseover
btn.removeEventListener("click",ev);  //dblclick
*/
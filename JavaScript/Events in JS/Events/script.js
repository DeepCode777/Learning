let btn = document.querySelector("#dbl");

btn.ondblclick = () => {
  console.log("Double Click button");
}

let div = document.querySelector("#mover");
div.mouseover = () => {
  console.log("This is double click event div");
}

/*
// Event
node.event = () => {
   handling
}


// event object
node.event = (e) => {
    handling
}
*/

// Inline Events or JS Events Hanling between this 
// 1) First Priority is JS Event handling
// 2) same event handle on same element/node then first event will override by second JS event
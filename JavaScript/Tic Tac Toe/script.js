// Access boxs
let boxs = document.querySelectorAll(".box");

// access reset button
let resetB = document.querySelector("#reset");

// store turn // O=true or X=false
let turn = true;


// store winning patterns - const
const patterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]
console.log(patterns);

// every boxs need to click at that time event listner work as click event and perform 
// 1] setinnerText - O=true or X=false
// button click - check turn
// turn o = toh text O - set false
// turn x = text X - set true
// button disable after click 1 time
for(let box of boxs) {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled=true;
    // count
  });
};

// check winner()
// get individual patern
// get position
// track inner text
// check position not empty so check
// pos1 = pos2 = pos3 -> check winner
// identify winner
// call show winner
const chackwinner = () => {
  for(let pattern of patterns){
    let ps0 = boxs[pattern[0]].innerText;
    let ps1 = boxs[pattern[1]].innerText;
    let ps2 = boxs[pattern[2]].innerText;
    
    if(ps0 === ps1 && ps1 === ps2){
      // show winner
      

    }
  }
}

// access new game btn
let newgame = document.querySelector("#newgame");
// access message container
let mescon = document.querySelector(".winner")
// access winner para
//let win = document.querySelector("p");
mescon.style.display="none";

let show = () => {
  win.innerText=`winner is ${ps0}`;
  mescon.style.display="block";
  
};
// show (winner)
// set messege winner
// remove class hide
// disable box for discontinu game

// disable all buttons
let disbox = () => {
  for (let box of boxs) {
    box.disabled=true;
  }
}

// ensble all buttons

// reset game function
// Trun can on for player
// enable box
// mess contsiner hide

// newgame click = reset game
// reset click = reset game
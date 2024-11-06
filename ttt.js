const playnow = document.querySelector(".play-now");
const reStart = document.querySelector(".restart");
const cells = document.querySelectorAll(".cell");

const winningMove = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let latestMove = "";

cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const index = event.target.dataset.index;
    let player = event.target;

    function move() {
      if (latestMove === "" || latestMove === "O") {
        console.log("X");
        latestMove = "X";
      } else {
        console.log("O");
       latestMove = "O";
      }
    }
    move();
    
    if(event.target.innerText === ""){
      event.target.innerText = latestMove
    }else{
      alert('already filled');
      move(); 
    }

  });
});

// function playerMove(latestMove) {
//   latestMove = "X";
//   return latestMove;
// }

// function nextMove(latestMove) {
//   let move = "";
//   if (latestMove === "X") {
//     latestMove = "O";
//     console.log("O");
//   } else {
//     latestMove = "X";
//   }
// }
function avoidRepetition() {}

function restart() {
  // to clear all the moves and restart
}

function playNow() {
  // start the game
}

function winner() {
  // to predict win
}

// problem statements:
// 1. Alternative players for each onclick events.
// 2. Alert when clicking in the filled box.
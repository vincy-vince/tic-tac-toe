const playnow = document.querySelector(".play-now");
// playnow.addEventListener('click' ,() => {
//   playGame();
// });
// playnow.removeEventListener()
// function playGame(){
const cells = document.querySelectorAll(".cell");
let latestMove = "X";
let xIndex = [];
let oIndex = [];

cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const index = event.target.dataset.index;
    if (latestMove === "X") {
      xIndex.push(index);
    } else if (latestMove === "O") {
      oIndex.push(index);
    }

    // console.log(oIndex);

    let player = event.target;

    if (event.target.innerText === "") {
      event.target.innerText = latestMove;
      move();
    } else {
      alert("already filled");
      return;
    }
    function move() {
      if (latestMove === "O") {
        latestMove = "X";
        winner();
      } else {
        latestMove = "O";
        winner();
      }
    }

  });
});
function winner() {
  const winningMove = [
    [0, 3, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (
    (latestMove === "X" && xIndex.length > 2) ||
    (latestMove === "O" && oIndex.length > 2)
  ) {
    let checKiNDEX;
    if (latestMove === "X") {
      checKiNDEX = xIndex;
    } else {
      checKiNDEX = oIndex;
    }
    winningMove.forEach((winVal, i) => {
      let isAvailable = true;
      winVal.forEach((value) => {
        let isMatched = false;
        checKiNDEX.forEach((val, i) => {
          if (value == val) {
            isMatched = true;
            return;
          }
        });
        if (isMatched === false) {
          isAvailable = false;
        }
      });

      if (isAvailable === true) {
        alert(latestMove+" winner!");
      }
    });
  }
}
// }
// function restart() {
// const reStart = document.querySelector(".restart");

// let indexEle;

//   const cellEle = document.querySelectorAll(".cell");
//   cellEle.forEach((cell) => {
//     cell.addEventListener("click", (event) => {
//       indexEle = event.target.dataset.index;
//       console.log(indexEle);
//     });
//   });

//   winningMove.forEach((value) => {
//     value.forEach((arr) => {
//       let arrIndex = arr;
//       console.log(arrIndex);
//     });
//   });

// to clear all the moves and restart
// }

function playNow() {
  // start the game
}

// if index of x = value // x wins,then breaks.
// if index of O = value // O wins,then breaks.

// problem statements:
// 1. Alternative players for each onclick events.
// 2. Alert when clicking in the filled box.

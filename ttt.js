let lastPlayer = "X";
let xIndex = [];
let oIndex = [];

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    let index = event.target.dataset.index;

    if (lastPlayer === "X") {
      xIndex.push(index);
    } else if (lastPlayer === "O") {
      oIndex.push(index);
    }

    if (event.target.textContent !== "") {
      alert("already filled");
    } else {
      event.target.textContent = lastPlayer;
      winner();
      move();
    }

    function move() {
      if (lastPlayer === "X") {
        lastPlayer = "O";
      } else {
        lastPlayer = "X";
      }
    }
  });
});
// let winnerIndex = [];
// let GameOver = [];
function winner() {
  let winnerMove = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (
    (lastPlayer === "X" && lastPlayer.length > 2) ||
    (lastPlayer === "O" && lastPlayer.length > 2)
  ) {
  }

  let playerIndex;
  if (lastPlayer === "X") {
    playerIndex = xIndex;
  } else {
    playerIndex = oIndex;
  }

  for (let i = 0; i < winnerMove.length; i++) {
    let isAvailable = true;
    const element = winnerMove[i];
    for (x = 0; x < element.length; x++) {
      let isMatched = false;
      const value = element[x];
      for (y = 0; y < playerIndex.length; y++) {
        if (value == playerIndex[y]) {
          isMatched = true;
          break;
        }
      }
      if (isMatched === false) {
        isAvailable = false;
        break;
      }
    }
    if (isAvailable === true) {
//       winnerIndex.push(playerIndex);
//       winnerIndex.forEach((winNo) => {
//         winNo.forEach((val) => {
//           GameOver.push(val);
//           // console.log(GameOver);
//           // console.log(playerIndex);
//           GameOver.forEach((turn) => {
//             console.log(GameOver);
// console.log("player index "+ playerIndex);

            // playerIndex.forEach((eachIndex) => {
            //   if(eachIndex == turn){
            //     const cells = document.querySelectorAll(".cell");
            //     cells.forEach((cell) => {
            //       cell.addClass = "blue-cell";
            //     });
            //   }
            // })
      //     });
      //   });
      // });
playerIndex.forEach((playInd) => {
  const cellEle = document.querySelectorAll(".cell");
  cellEle.forEach((cell) => {
    console.log(cell);
  })
})
      document.getElementById(
        "winner_screen"
      ).innerText = `player ${lastPlayer} wins`;

      //const timeoutId = setTimeout(() => {
      //   reset();
      //   clearTimeout(timeoutId);
      // }, 3000);
      break;
    }
  }
}

function reset() {
  document.getElementById("winner_screen").innerText = "";
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.innerText = "";
  });
  lastPlayer = "X";
  oIndex = [];
  xIndex = [];
  return;
}
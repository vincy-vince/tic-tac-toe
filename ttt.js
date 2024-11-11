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

    for (let a = 0; a < 9; a++) {
      const cellEle = document.querySelectorAll(".js-cell");
      let finalIndex = cellEle[a].attributes[0].value;
      if (lastPlayer[finalIndex] != "") {
      }
      document.getElementById("winner_screen").innerText = "draw";
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
let winnerIndex = [];
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
        console.log(playerIndex[y]);
      }
      if (isMatched === false) {
        isAvailable = false;
        break;
      }  
    }

    if (isAvailable === true) {
      document.getElementById(
        "winner_screen"
      ).innerText = `player ${lastPlayer} wins`;
      // compare it with the winner move
      winnerMove.forEach((move) => {
        move.forEach((arr) => {
          playerIndex.forEach((player) => {
            if (arr == player ) {
              console.log(arr);
              const cellEle = document.querySelectorAll(".js-cell");
              cellEle[arr].style.backgroundColor = "rgba(0, 255, 255, 0.658)";
            }
          });
        });
      });

      // const timeoutId = setTimeout(() => {
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
// attr[1].attributes[0].value
// let attr = document.querySelectorAll(".js-cell")

// DRAW :

/*if (
  lastPlayer[cellEle[0].attributes[0].value] !== "" &&
  lastPlayer[cellEle[1].attributes[0].value] !== "" &&
  lastPlayer[cellEle[2].attributes[0].value] !== "" &&
  lastPlayer[cellEle[3].attributes[0].value] !== "" &&
  lastPlayer[cellEle[4].attributes[0].value] !== "" &&
  lastPlayer[cellEle[5].attributes[0].value] !== "" &&
  lastPlayer[cellEle[6].attributes[0].value] !== "" &&
  lastPlayer[cellEle[7].attributes[0].value] !== "" &&
  lastPlayer[cellEle[8].attributes[0].value] !== ""
) {
  document.getElementById("winner_screen").innerText = "draw";
}*/

/* 
  const disabled = () => {
    for(let cell of cells){
      cell.disabled = true;
    }
  };
*/

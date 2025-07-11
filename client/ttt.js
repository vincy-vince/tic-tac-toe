const canvas = document.querySelector("#confetti");
let lastPlayer = "X";
let xIndex = [];
let oIndex = [];

const jsConfetti = new JSConfetti();
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

  let playerIndex;
  if (lastPlayer === "X") {
    playerIndex = xIndex;
  } else {
    playerIndex = oIndex;
  }

  if (
    (lastPlayer === "X" && playerIndex.length > 2) ||
    (lastPlayer === "O" && playerIndex.length > 2)
  ) {
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
      document.getElementById(
        "winner_screen"
      ).innerText = `player ${lastPlayer} wins`;
      jsConfetti.addConfetti();
      // compare it with the winner move
      const cellEle = document.querySelectorAll(".js-cell");
      winnerMove[i].forEach((move) => {
        playerIndex.forEach((player) => {
          if (move == player) {
            cellEle[move].style.backgroundColor = "rgba(0, 255, 255, 0.658)";
          }
        });
      });
      document.getElementById(
        "winner_screen"
      ).innerText = `congratulations player ${lastPlayer}`;
      setTimeout(() => {
        reset();
      }, 2000);
      break;
    }
    if (xIndex.length + oIndex.length === 9) {
      document.getElementById("winner_screen").innerText = "🤝 It's a Draw!";
      
    }
  }
}

function reset() {
  lastPlayer = "X";
  oIndex = [];
  xIndex = [];
  document.getElementById("winner_screen").innerText = "";
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.style.backgroundColor = "";
  });
  return;
}

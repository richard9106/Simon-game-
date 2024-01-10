let game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  turnNumber: 0,
  turnInProgress:false,
  lastButton :"",
  choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
  game.score = 0;
  game.currentGame = [];
  game.playerMoves = [];
  for (let circle of document.getElementsByClassName("circle")) {
    if (circle.getAttribute("data-listener") !== "true") {
      circle.addEventListener("click", (e) => {
        if (game.currentGame.length > 0 && !game.turnInProgress) {
          let move = e.target.getAttribute("id");
          game.lastButton = move;
          lightUp(move);
          game.playerMoves.push(move);
          playerTurn();
        }
      });
      circle.setAttribute("data-listener", "true");
    }
  }
  showTurn();
  showScore();
  addTurn();
}

function showScore() {
  document.getElementById("score").innerText = game.score;
}

function addTurn() {
  game.playerMoves = [];
  game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
  showTurn();
}

function showTurn() {
  game.turnInProgress = true;
  game.turnNumber = 0;
  let turns = setInterval(() => {
    lightUp(game.currentGame[game.turnNumber]);
    game.turnNumber++;
    if (game.turnNumber >= game.currentGame.length) {
      clearInterval(turns);
      game.turnInProgress = false;
    }
  }, 800);
}
function lightUp(circ) {
  document.getElementById(circ).classList.add("light");
  setTimeout(function () {
    document.getElementById(circ).classList.remove("light");
  }, 300);
}
function playerTurn() {
  let i = game.playerMoves.length - 1;
  if (game.currentGame[i] === game.playerMoves[i]) {
    if (game.currentGame.length == game.playerMoves.length) {
      game.score++;
      showScore();
      addTurn();
    }
  } else {
    alert("Wrong move!");
    newGame();
  }
}

module.exports = {
  game,
  newGame,
  showScore,
  addTurn,
  lightUp,
  showTurn,
  playerTurn,
};

const MOVES = ['rock', 'paper', 'scissor'];

function getComputerMove() {
  const number = Math.floor(Math.random() * 3);
  return MOVES[number];
}

function playGame(playerMove, computerMove) {
  playerMove = playerMove.toLowerCase();

  const move1 = MOVES.indexOf(playerMove);
  const move2 = MOVES.indexOf(computerMove);

  if (move2 == move1 + 1 || move2 == move1 - 2) {
    return `You lost! ${computerMove} beats ${playerMove}`;
  } else if (move1 == move2 + 1 || move1 == move2 - 2) {
    return `You won! ${playerMove} beats ${computerMove}`;
  } else {
    return `It's a draw!`;
  }
}

const questionMark = '❓';
const rockMark = '✊';
const paperMark = '✋';
const scissorMark = '✌️';

const playerMoveIcon = document.getElementById("player-move");
const computerMoveIcon = document.getElementById("computer-move");
const gameResultMsg = document.getElementById("game-result");
const playerScoreMsg = document.getElementById("player-score");
const computerScoreMsg = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

function resetMoveIcons() {
  playerMoveIcon.textContent = questionMark;
  computerMoveIcon.textContent = questionMark;
  gameResultMsg.textContent = "";
}

function getMoveIcon(move) {
  switch (move) {
    case 'rock':
      return rockMark;
    case 'paper':
      return paperMark;
    case 'scissor':
      return scissorMark;
  }
}

const gameButtons = document.querySelectorAll(".rps-buttons-container button");
gameButtons.forEach(btn => {
  btn.addEventListener("click", (event) => {
    resetMoveIcons();
    const playerMove = btn.id.split("-")[0];
    const computerMove = getComputerMove();

    playerMoveIcon.style.fontSize = "62px";
    computerMoveIcon.style.fontSize = "62px";

    playerMoveIcon.textContent = getMoveIcon(playerMove);
    computerMoveIcon.textContent = getMoveIcon(computerMove);
    const gameResult = playGame(playerMove, computerMove);

    if (gameResult === "It's a draw!") {
      gameResultMsg.textContent = gameResult;
    } else {
      gameResultMsg.textContent = gameResult.split("!")[0] + "!";
      if (gameResultMsg.textContent === "You won!") {
        playerScore++;
      } else {
        computerScore++;
      }
    }

    playerScoreMsg.textContent = playerScore;
    computerScoreMsg.textContent = computerScore;
  });
});

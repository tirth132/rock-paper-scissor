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

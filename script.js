const MOVES = ['rock', 'paper', 'scissor'];

function getComputerMove() {
  const number = Math.floor(Math.random() * 3);
  return MOVES[number];
}

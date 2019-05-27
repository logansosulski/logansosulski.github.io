//Chess Board

//Creating a square size constant
const SQUARESIZE = 75;

//Creating the canvas
function setup() {
  createCanvas(650, 650);
}

//Calling the function that draws the chessboard
function draw() {
  drawChessBoard(); 
}

//Creating a function to draw a chessboard
function drawChessBoard() {
  for (let i = 0; i < 600; i += SQUARESIZE) {
    for (let j = 0; j < 600; j += SQUARESIZE) {
      //Filling the square so it's the right colour
      if (i % 2 === 0 && j % 2 === 0) {
        fill(0);
      }
      else if (i % 2 !== 0 && j % 2 !== 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      //Drawing a square at the current i,j position
      rect(i,j,SQUARESIZE,SQUARESIZE);
    }
  }
}
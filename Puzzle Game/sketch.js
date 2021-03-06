// Puzzle Game
// Logan Sosulski
// May 27, 2019
//
// Extra for Experts:
// - Did the chanllenges from canvas

//Initilizing Variables
let pattern = 'cross';
let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]];



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  randomizeStart();
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  highlight();               //put an overlay over squares that would be effected by left click
  winner();                  //determining if the current gameboard is all one colour
}



function mousePressed(){
  if (mouseButton === LEFT) {
    if (pattern === 'cross') {
      // cross-shaped pattern flips on a left mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
      flip(currentCol, currentRow);
      flip(currentCol-1, currentRow);
      flip(currentCol+1, currentRow);
      flip(currentCol, currentRow-1);
      flip(currentCol, currentRow+1);
    }
    else {
      // square pattern flips on a left mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
      flip(currentCol, currentRow);
      flip(currentCol+1, currentRow);
      flip(currentCol, currentRow+1);
      flip(currentCol+1, currentRow+1);
    }
  }
  // single square flips on a right mouseclick
  if (mouseButton === RIGHT) {
    flip(currentCol, currentRow);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

// Puts a transparent highlight over squares that would be affected by current left click
function highlight() {
  if (pattern === 'cross') {
    fill(153,255,204,100);
    rect(currentCol*rectWidth, currentRow*rectHeight,rectWidth,rectHeight);
    rect((currentCol-1)*rectWidth, currentRow*rectHeight,rectWidth,rectHeight);
    rect((currentCol+1)*rectWidth, currentRow*rectHeight,rectWidth,rectHeight);
    rect(currentCol*rectWidth, (currentRow-1)*rectHeight,rectWidth,rectHeight);
    rect(currentCol*rectWidth, (currentRow+1)*rectHeight,rectWidth,rectHeight);
  }
  else {
    fill(153,255,204,100);
    rect(currentCol*rectWidth, currentRow*rectHeight,rectWidth,rectHeight);
    rect((currentCol+1)*rectWidth, currentRow*rectHeight,rectWidth,rectHeight);
    rect(currentCol*rectWidth, (currentRow+1)*rectHeight,rectWidth,rectHeight);
    rect((currentCol+1)*rectWidth, (currentRow+1)*rectHeight,rectWidth,rectHeight);
  }
}

// When the space key is pressed the pattern of a left click switches
function keyPressed() {
  if (keyCode === 32) {
    if (pattern === 'cross') {
      pattern = 'square';
    }
    else {
      pattern = 'cross';
    }
  }
}

// Assigns each square a 0 or 255 fill value with a 50% chance for each outcome
function randomizeStart() {
  for (let i = 0; i < gridData.length; i++) {
    for ( let j = 0; j < gridData[i].length; j++) {
      gridData[i][j] = coinFlip();
    }
  }
}

// picks a random number from 1 to 100 and checks if its above or below 50 creating a 50/50 chance
function coinFlip() {
  let n = int(random(100));
  if ( n < 50) {
    return 0;
  }
  else {
    return 255;
  }
}

// checks to see if all squares are the same colour and puts winning check up if all are same colour
function winner() {
  let amountSame = 0;
  let testCase = gridData[0][0];
  for (let i = 0; i < gridData.length; i++) {
    for ( let j = 0; j < gridData[i].length; j++) {
      if (gridData[i][j] === testCase) {
        amountSame += 1;
        if (amountSame === 20) {
          fill(255);
          textSize(64);
          text('You Win!', width/2-125, height/3);
          fill(0);
          text('You Win!', width/2-125, height/3*2);
        }
      }
    }
  }
}
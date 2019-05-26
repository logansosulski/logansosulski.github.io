// Multi-Coloured Grid
// Logan Sosulski
// May 25, 2019
//
// Extra for Experts:
// - Made a function to find all the common factors of the width and height so that the squares don't get cut off my the edge 
// and made the squares colours sudo-random to make the grid look better

//Initilizing global variables
let squareSize;
let curIndex;
let commonFactors = [];

//Setting the canvas size and determining the square size by calling functions
function setup() {
  createCanvas(800, 800);
  findCommonFactors();
  curIndex = round(commonFactors.length / 2);
  changeSquareSize(0);
  noLoop(); //Making the 
}

//Drawing a square grid with sudo-random colours to fill up the canvas
function draw() {
  for (let x=0;x<width;x+=squareSize) {
    for (let y=0;y<height;y+=squareSize) {
      fill(int(random(255)),0,int(random(255)));
      rect(x,y,squareSize,squareSize);
    }
  }
}

//Redrawing the grid when a key is pressed
function keyPressed() {
  draw();
}

//Calling a function to change the square size based on which button is clicked and redrawing the grid
function mousePressed() {
  if (mouseButton === LEFT) {
    if (curIndex !== commonFactors.length-1) {
      changeSquareSize(1);
    }
  }
  if (mouseButton === RIGHT) {
    if (curIndex !== 0) {
      changeSquareSize(-1);
    }
  }
  draw();
}

//Changing the square size
function changeSquareSize(n) {
  squareSize = commonFactors[curIndex + n];
  curIndex = curIndex + n;
}

function findCommonFactors() {
  let factorsX = [];
  let factorsY = [];

  //Finding all the factors of the width
  for (let i = 1; i <= width; i++) {
    if (width%i === 0) {
      factorsX.push(i);
    }
  }

  //Finding all the factors of the height
  for (let i = 1; i <= height; i++) {
    if (height%i === 0) {
      factorsY.push(i);
    }
  }

  //Finding all the common factors between the width and the height
  for (let i = 0; i < factorsX.length; i++) {
    for (let j = 0; j < factorsY.length; j++) {
      if (factorsX[i] === factorsY[j]) {
        commonFactors.push(factorsX[i]);
      }
    }
  }
}
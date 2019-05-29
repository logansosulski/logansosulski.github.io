//Black and White Target

//Creating position and size decrease constants
const ELLIPSEX = 200;
const ELLIPSEY = 200;
const SIZEDECREASE = 40;


//Creating the canvas
function setup() {
  createCanvas(400, 400);
}

//Calling the function and drawing the background
function draw() {
  background(240);
  drawTarget();
}

//Creating a function to draw a target
function drawTarget() {
  //Setting the size variable
  let ellipseSize = 400;

  //Drawing the target
  for(let i=0;i<=10;i++) {
    ellipse(ELLIPSEX, ELLIPSEY, ellipseSize, ellipseSize);
    ellipseSize -= SIZEDECREASE;
  }
}
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize;
let divisableBy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareSize = 20;
  noLoop();
}

function draw() {
  for (let x=0;x<=width-squareSize;x+=squareSize) {
    for (let y=0;y<=width-squareSize;y+=squareSize) {
      fill(int(random(255)),0,int(random(255)));
      rect(x,y,squareSize,squareSize);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  squareSize
}

function keyPressed() {
  draw();
}

function findCommonFactor() {
  if (width%2 === 0 && height%2 === 0) {
    divisableBy = 2;
  }
  if ()
}

//function mousePressed() {
  //if (mouseButton === LEFT) {
    //if (squareSize )
      //squareSize = (width/20+height/10)/2;
  //}
  //if (mouseButton === RIGHT) {
    //make bigger
    //squareSize = (width/5+height/5)/2;
  //}
  //draw();
//}
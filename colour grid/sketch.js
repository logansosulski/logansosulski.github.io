// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareSize = (width/10+height/10)/2;
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

function keyPressed() {
  draw();
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if (squareSize )
    squareSize = (width/20+height/10)/2;
  }
  if (mouseButton === RIGHT) {
    //make bigger
    squareSize = (width/5+height/5)/2;
  }
  draw();
}
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize;

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

function keyPressed() {
  draw();
}
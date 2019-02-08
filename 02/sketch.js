// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let xSpeed;
let ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = windowHeight/2;
  xSpeed = random(-3,3);
  ySpeed = random(-3,3);
  background(0,255,255);
}

function draw() {
  noStroke();
  ellipse(x,y,50,50);
  x += xSpeed;
  y += ySpeed;

  if (x<0 || x>windowWidth) {
    xSpeed = xSpeed * -1;
  }
  if (y<0 || y>windowHeight) {
    ySpeed = ySpeed * -1;
  }
}

function mousePressed() {
  fill(255,0,255);
  xSpeed = random(-3,3);
  ySpeed = random(-3,3);
}

function mouseReleased() {
  fill(0,255,0);
  xSpeed = random(-3,3);
  ySpeed = random(-3,3);
}
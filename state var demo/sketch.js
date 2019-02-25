// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let buttonX;
let buttonY;
let buttonSize;
let rectX;
let rectY;
let rectW;
let rectH;
let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width/2;
  buttonY = height/4;
  buttonSize = 50;
  rectX = width/2;
  rectY = height/3*2;
  rectW = width/2;
  rectH = height/3;
  r = 255;
  g = 255;
  b = 0;
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(255);
  fill(255,0,255);
  ellipse(buttonX,buttonY,buttonSize,buttonSize);
  if (mouseDistance(mouseX,buttonX,mouseY,buttonY)<=buttonSize/2) {
    if (b < 255) {
      b = b+15;
      g = g-15;
      fill(r,g,b);
    }
    fill(r,g,b);
  }
  else {
    if (b > 0) {
      g = g+15;
      b = b-15;
      fill(r,g,b);
    }
    fill(r,g,b);
  }
  rect(rectX,rectY,rectW,rectH);
}

function mouseDistance(x1,x2,y1,y2) {
  let a = abs(x1-x2);
  let b = abs(y1-y2);
  let c = sqrt(sq(a)+sq(b));
  return c;
}
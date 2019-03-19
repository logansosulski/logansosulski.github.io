// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL;
let lionR;
let direction = 1;
let pinImages = [];

function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i=0;i<9;i++) {
    pinImages.push(loadImage("assets/pin-01.png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255,0,255);
  lions();
  image(pinImages[0],width/2,width/2);
}

function lions() {
  facing();
  push();
  translate(mouseX,mouseY);
  scale(0.5);
  if (direction === 1) {
    image(lionL,0,0);
  }
  else {
    image(lionR,0,0);
  }
  pop();
  //image(lionL,width/3*2,width/3*2);
}

function facing() {
  if (pmouseX < mouseX) {
    direction = 2;
  }
  if (pmouseX > mouseX) {
    direction = 1;
  }
}
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x1;
let y1;
let x2;
let y2;

function setup() {
  createCanvas(3000, 4500);
  background(255);
}

function draw() {
  createPoints();
  intersectsCircle();
  drawLines();
}

function drawLines() {
  stroke(random(150,200),random(100,200),random(200,255));
  line(x1,y1,x2,y2);
}

function intersectsCircle() {
  if ((y1+y2)/2 > 2000 && (y1+y2)/2 < 2500) {
    createPoints();
    intersectsCircle();
  }
}

function createPoints() {
  x1 = random(0,500);
  y1 = random(height);
  x1 = random(2500,width);
  y2 = random(height);
}
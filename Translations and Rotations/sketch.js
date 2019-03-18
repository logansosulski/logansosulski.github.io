// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let clockDiameter = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawClock(width/2,height/2);
}

function drawClock(x,y) {
  ellipse(x,y,clockDiameter,clockDiameter);
  for (let i=0;i<=60;i++) {
    fill(0);
    line(x,y-clockDiameter);
  }
}
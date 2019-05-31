// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  drawArt();
}

function drawArt() {
  beginShape();
  for (let i = 0; i <= 360; i+=10) {
    let x = width/2 * sin(i) + width/2;
    let y = width/2 * cos(i) + height/2;
    vertex(x, y);
  }
  endShape();
}
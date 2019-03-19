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
  background(0,255,0);
  drawClock(width/2,height/2);
  secondHand(width/2,height/2);
}

function drawClock(x,y) {
  fill(255);
  push();
  translate(x,y);
  strokeWeight(5);
  ellipse(0,0,clockDiameter,);
  for (let i = 0; i <= 360; i+= 6) {
    push();
    rotate(radians(i));
    if (i % 30 === 0) {
      strokeWeight(3);
      line(200,0,250,0);
    }
    else {
      strokeWeight(1);
      line(225,0,250,0);
    }
    
    pop();
  }
  pop();
}

function secondHand(x,y) {
  push();
  translate(x,y);
  rotate(radians(frameCount/12));
  strokeWeight(3);
  line(0,0,200,0)
  pop();
}
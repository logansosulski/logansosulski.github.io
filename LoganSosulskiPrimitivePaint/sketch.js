// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapeSize = 50;


function setup() {
  createCanvas(2000, 1000);
  let x = windowWidth/2;
  let y = windowHeight/2;
}

function draw() {
  background(0);
  fill(255);
  keyTyped();
  
}

function keyTyped() {
  if (key === "a") {
    rect(mouseX-25,mouseY-25,shapeSize,shapeSize);
  }
  if (key === "s") {
    ellipse(mouseX,mouseY,shapeSize,shapeSize);
  }
  if (key === "d") {
    triangle(mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2,mouseX,mouseY-shapeSize/2);
  }
  if (keyCode === 32) {
    background(0);
  }
}
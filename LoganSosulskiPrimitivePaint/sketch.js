// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapeSize = 200;
let dataArray = [];
let shapeType = "rect";


function setup() {
  createCanvas(2000, 1000);
}

function draw() {
  background(0);
  fill(random(255),random(255),random(255));
  if (shapeType === "rect") {
    rect(mouseX-shapeSize/2,mouseY-shapeSize/2,shapeSize,shapeSize);
  }
  if (shapeType === "ellipse") {
    ellipse(mouseX,mouseY,shapeSize,shapeSize);
  }
  if (shapeType === "triangle") {
    triangle(mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2,mouseX,mouseY-shapeSize/2);
  }
}

function keyTyped() {
  if (key === "a") {
    shapeType = "rect";
    rect(mouseX-shapeSize/2,mouseY-shapeSize/2,shapeSize,shapeSize);
  }
  if (key === "s") {
    shapeType = "ellipse";
    ellipse(mouseX,mouseY,shapeSize,shapeSize);
  }
  if (key === "d") {
    shapeType = "triangle";
    triangle(mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2,mouseX,mouseY-shapeSize/2);
  }
  if (keyCode === 32) {
    background(0);
  }
}
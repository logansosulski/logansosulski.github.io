// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapeSize = 200;
let dataArray = [];
let shapeType;


function setup() {
  createCanvas(2000, 1000);
  let x = windowWidth/2;
  let y = windowHeight/2;
}

function draw() {
  background(0);
  fill(255);
  shapeType(mouseX,mouseY,size,size);
  for (let i=0; i<dataArray.length; i++) {
    shapeType(dataArray[i][0], dataArray[i][1], dataArray[i][2], dataArray[i][2]);
  }
}

function keyTyped() {
  if (key === "a") {
    shapeType = rect;
    rect(mouseX-25,mouseY-25,shapeSize,shapeSize);
  }
  if (key === "s") {
    shapeType = ellipse;
    ellipse(mouseX,mouseY,shapeSize,shapeSize);
  }
  if (key === "d") {
    shapeType = triangle;
    triangle(mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2,mouseX,mouseY-shapeSize/2);
  }
  if (keyCode === 32) {
    background(0);
  }
}

function mousePressed() {
  let cur = [mouseX, mouseY, size];
  dataArray.push(cur);
  if (shapeType !== triangle) {
    shapeType(mouseX,mouseY,size,size);
  }
  else {
    shapeType(mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2,mouseX,mouseY-shapeSize/2);
  }
}
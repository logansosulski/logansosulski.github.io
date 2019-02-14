// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapeSize = 100;
let dataArrayRect = [];
let dataArrayEllipse = [];
let dataArrayTri = [];
let shapeType = "rect";
let r = 255;
let g = 0;
let b = 255;


function setup() {
  createCanvas(2000, 1000);
}

function draw() {
  background(0);
  fill(r,g,b);
  if (shapeType === "rect") {
    rect(mouseX-shapeSize/2,mouseY-shapeSize/2,shapeSize,shapeSize);
  }
  if (shapeType === "ellipse") {
    ellipse(mouseX,mouseY,shapeSize,shapeSize);
  }
  if (shapeType === "triangle") {
    triangle(mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2,mouseX,mouseY-shapeSize/2);
  }
  for (let i=0; i<dataArrayRect.length; i++) {
    fill(dataArrayRect[i][3],dataArrayRect[i][4],dataArrayRect[i][5]);
    rect(dataArrayRect[i][0], dataArrayRect[i][1], dataArrayRect[i][2], dataArrayRect[i][2]);
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

function mouseWheel(event) {
  if (event.delta > 0) {
    size -= 50;
  }
  else {
    size += 50;
  }
  if (size <= 50) {
    size += 50;
  }
}
  
function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
  if (shapeType === "rect") {
    let cur = [mouseX-shapeSize/2,mouseY-shapeSize/2,shapeSize,r,g,b];
    dataArrayRect.push(cur);
  }
  if (shapeType === "ellipse") {
    let cur = [mouseX,mouseY,shapeSize,r,g,b];
    dataArrayEllipse.push(cur);
  }
}

for (let i=0; i<dataArray.length; i++) {
  image(img, dataArray[i][0], dataArray[i][1], dataArray[i][2], dataArray[i][2]);
}
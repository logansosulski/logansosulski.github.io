// Primitive Paint
// Logan Sosulski
// Feb. 14, 2019
//
// Extra for Experts:
// Added a feature to allow user to preview shapes before they are placed

//Initializing the variables
let shapeSize = 100;
let dataArrayRect = [];
let dataArrayEllipse = [];
let dataArrayTri = [];
let shapeType = "rect";
let r = 255;
let g = 0;
let b = 255;
let autonomousShapeSize = 50;
let autonomousShapeGrow = true;

//Creating the canvas
function setup() {
  createCanvas(2000, 1000);
}

function draw() {
  background(0);
  //Drawing any shape
  for (let i=0; i<dataArrayRect.length; i++) {
    fill(dataArrayRect[i][3],dataArrayRect[i][4],dataArrayRect[i][5]);
    rect(dataArrayRect[i][0], dataArrayRect[i][1], dataArrayRect[i][2], dataArrayRect[i][2]);
  }
  for (let i=0; i<dataArrayEllipse.length; i++) {
    fill(dataArrayEllipse[i][3],dataArrayEllipse[i][4],dataArrayEllipse[i][5]);
    ellipse(dataArrayEllipse[i][0], dataArrayEllipse[i][1], dataArrayEllipse[i][2], dataArrayEllipse[i][2]);
  }
  for (let i=0; i<dataArrayTri.length; i++) {
    fill(dataArrayTri[i][6],dataArrayTri[i][7],dataArrayTri[i][8]);
    triangle(dataArrayTri[i][0], dataArrayTri[i][1], dataArrayTri[i][2], dataArrayTri[i][3], dataArrayTri[i][4],dataArrayTri[i][5]);
  }
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
  fill(0,0,255);
  ellipse(windowWidth/2,windowHeight/2, autonomousShapeSize, autonomousShapeSize);
  //Drawing the blue growing/shrinking ellipse
  if (autonomousShapeGrow === true) {
    if (autonomousShapeSize < 100) {
      autonomousShapeSize += 1;
    }
    else {
      autonomousShapeGrow = false;
    }
  }
  else {
    if (autonomousShapeSize > 1) {
      autonomousShapeSize -= 1;
    }
    else {
      autonomousShapeGrow = true;
    }
  }
  //Drawing my name at the bottom
  fill(255);
  textSize(24);
  textFont("Comic Sans MS");
  text("Logan Sosulski", windowWidth-200, windowHeight-50);
}

function keyTyped() {
  //changing between shapes depending on key pressed
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
    dataArrayRect = [];
    dataArrayEllipse = [];
    dataArrayTri = [];
  }
}

function mouseWheel(event) {
  if (event.delta > 0) {
    shapeSize -= 10;
  }
  else {
    shapeSize += 10;
  }
  if (shapeSize <= 10) {
    shapeSize += 10;
  }
}
  
function mousePressed() {
  if (shapeType === "rect") {
    let cur = [mouseX-shapeSize/2,mouseY-shapeSize/2,shapeSize,r,g,b];
    dataArrayRect.push(cur);
  }
  if (shapeType === "ellipse") {
    let cur = [mouseX,mouseY,shapeSize,r,g,b];
    dataArrayEllipse.push(cur);
  }
  if (shapeType === "triangle") {
    let cur = [mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2,mouseX,mouseY-shapeSize/2,r,g,b];
    dataArrayTri.push(cur);
  }
  r = random(255);
  g = random(255);
  b = random(255);
}
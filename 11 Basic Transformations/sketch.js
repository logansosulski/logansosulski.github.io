// Basic Transformations Sandbox


let originalSpacing = 20;
let x = 100;
let xSpeed = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNER);
}

function draw() {
  fill(255,20);
  rect(0,0,width,height);
  //background(255);

  //transformation one: TRANSLATION
  // drawBasicGrid(220);
  // push();
  // translate(100,20);
  // rectangleRed(0,0);
  // pop();

  // push();
  // translate(mouseX,mouseY);
  // drawBasicGrid(0);
  // rectangleBlue(0,0);

  //transformation two: SCALE
  // rectangleRed(0,0);
  // push();
  // translate(100,100);
  // scale(9);
  // drawBasicGrid(0);
  // rectangleBlue(0,0);
  // pop();



  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  push();
  translate(x,60);
  rotate(radians(frameCount));
  face(0,0);
  pop();
  x = x+xSpeed;
  if (x < 0 || x > width) {
    xSpeed = xSpeed*-1;
  }


  //Combinations of Transformations



}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(random(200),random(200),random(200));
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }
}

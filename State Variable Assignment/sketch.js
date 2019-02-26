// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mouseQuad;
let r1 = 255;
let g1 = 255;
let b1 = 0;
let r2 = 255;
let g2 = 255;
let b2 = 0;
let r3 = 255;
let g3 = 255;
let b3 = 0;
let r4 = 255;
let g4 = 255;
let b4 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);



  if (mouseX > windowWidth/2 && mouseY < windowHeight/2) {
    mouseQuad = 1;
    if (b1 < 255) {
      b1=b1+15;
      g1=g1-15;
      fill(r1,g1,b1);
    }
    fill(r1,g1,b1);
  }
  else {
    if (b1 > 0) {
      b1=b1-15;
      g1=g1+15;
      fill(r1,g1,b1);
    }
    fill(r1,g1,b1);
  }
  rect(windowWidth/2,0,windowWidth/2,windowHeight/2);



  if (mouseX < windowWidth/2 && mouseY < windowHeight/2) {
    mouseQuad = 2;
    if (b2 < 255) {
      b2=b2+15;
      g2=g2-15;
      fill(r2,g2,b2);
    }
    fill(r2,g2,b2);
  }
  else {
    if (b2 > 0) {
      b2=b2-15;
      g2=g2+15;
      fill(r2,g2,b2);
    }
    fill(r2,g2,b2);
  }
  rect(0,0,windowWidth/2,windowHeight/2);



  if (mouseX < windowWidth/2 && mouseY > windowHeight/2) {
    mouseQuad = 3;
    if (b3 < 255) {
      b3=b3+15;
      g3=g3-15;
      fill(r3,g3,b3);
    }
    fill(r3,g3,b3);
  }
  else {
    if (b3 > 0) {
      b3=b3-15;
      g3=g3+15;
      fill(r3,g3,b3);
    }
    fill(r3,g3,b3);
  }
  rect(0,windowHeight/2,windowWidth/2,windowHeight/2);



  if (mouseX > windowWidth/2 && mouseY > windowHeight/2) {
    mouseQuad = 4;
    fadeIn(r4,g4,b4);
    fill(r4,g4,b4);
  }
  else {
    fadeOut(r4,g4,b4);
    fill(r4,g4,b4);
  }
  rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2);
}

function fadeIn(r,g,b) {
  if (b < 255) {
    b=b+15;
    g=g-15;
    fill(r,g,b);
  }
}

function fadeOut(r,g,b) {
  if (b > 0) {
    b4=b4-15;
    g4=g4+15;
    fill(r4,g4,b4);
  }
}

function mousePressed() {
  if (mouseX < windowWidth/2 && mouseY < windowHeight/2) {
    b1 = 255;
    g1 = 0;
    b2 = 255;
    g2 = 0;
    b3 = 255;
    g3 = 0;
    b4 = 255;
    g4 = 0;
  } 
}
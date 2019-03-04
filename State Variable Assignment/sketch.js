// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mouseQuad = 2;
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
let light = "off";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  quadrentLocation();
  fade();
  fill(r1,g1,b1);
  rect(width / 2, 0, width / 2, height / 2);
  fill(r2,g2,b2);
  rect(0, 0, width / 2, height / 2);
  fill(r3,g3,b3);
  rect(0, height / 2, width / 2, height / 2);
  fill(r4,g4,b4);
  rect(width / 2, height / 2, width / 2, height / 2);
}

function fade() {
  if (mouseQuad === 1) {
    if (b1<255) {
      b1=b1+15;
      g1=g1-15;
      fill(r1,g1,b1);
    }
  }
  else {
    if (b1>0) {
      b1=b1-15;
      g1=g1+15;
      fill(r1,g1,b1);
    }
  }
  if (mouseQuad === 2) {
    if (b2<255) {
      b2=b2+15;
      g2=g2-15;
      fill(r2,g2,b2);
    }
  }
  else {
    if (b2>0) {
      b2=b2-15;
      g2=g2+15;
      fill(r2,g2,b2);
    }
  }
  if (mouseQuad === 3) {
    if (b3<255) {
      b3=b3+15;
      g3=g3-15;
      fill(r3,g3,b3);
    }
  }
  else {
    if (b3>0) {
      b3=b3-15;
      g3=g3+15;
      fill(r3,g3,b3);
    }
  }
  if (mouseQuad === 4) {
    if (light === "off") {
      if (b4<255) {
        b4=b4+15;
        g4=g4-15;
        fill(r4,g4,b4);
      }
    }
    else {
      b4 = 255;
      g4 = 0;
    }
  }
  else {
    if (light === "off") {
      if (b4>0) {
        b4=b4-15;
        g4=g4+15;
        fill(r4,g4,b4);
      }
    }
    else {
      b4 = 255;
      g4 = 0;
    }
  }
}



function mousePressed() {
  if (mouseX > width / 2 && mouseY > height / 2) {
    if (b4 === 0) {
      b4 = 255;
      g4 = 0;
    }
    else {
      b4 = 0;
      g4 = 255;
    }
    if (light === "off") {
      light = "on";
    }
    else {
      light = "off";
    }
  }
}

function quadrentLocation() {
  if (mouseX > width / 2) {
    if (mouseY < height / 2) {
      mouseQuad = 1;
    }
    else {
      mouseQuad = 4;
    }
  }
  else {
    if (mouseY < height / 2) {
      mouseQuad = 2;
    }
    else {
      mouseQuad = 3;
    }
  }
}
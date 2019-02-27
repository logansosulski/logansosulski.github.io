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

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  quadrentLocation();
  print(mouseQuad);
  if (mouseQuad === 1) {
    fadeIn(r1, g1, b1);
  }
  else {
    fadeOut(r1, g1, b1);
  }
  fill(r1, g1, b1);
  rect(width / 2, 0, width / 2, height / 2);

  if (mouseQuad === 2) {
    fadeIn(r2, g2, b2);
  }
  else {
    fadeOut(r2, g2, b2);
  }
  fill(r2, g2, b2);
  rect(0, 0, width / 2, height / 2);

  if (mouseQuad === 3) {
    fadeIn(r3, g3, b3);
  }
  else {
    fadeOut(r3, g3, b3);
  }
  fill(r3, g3, b3);
  rect(0, height / 2, width / 2, height / 2);

  if (mouseQuad === 4) {
    fadeIn(r4, g4, b4);
  }
  else {
    fadeOut(r4, g4, b4);
  }
  fill(r4, g4, b4);
  rect(width / 2, height / 2, width / 2, height / 2);

  onButton();
}

function fadeIn(r, g, b) {
  if (b < 255) {
    b = b + 15;
    g = g - 15;
    fill(r, g, b);
  }
  else {
    b = b - 15;
    g = g - 15;
  }
}

function fadeOut(r, g, b) {
  if (b > 0) {
    b = b - 15;
    g = g + 15;
    fill(r, g, b);
  }
  else {
    b = b + 15;
    g = g - 15;
  }
}

function onButton() {
  if (mouseIsPressed) {
    if (mouseX < width / 2 && mouseY < height / 2) {
      b1 = 255;
      g1 = 0;
      b2 = 255;
      g2 = 0;
      b3 = 255;
      g3 = 0;
      b4 = 255;
      g4 = 0;
    }
    else {
      b1 = 0;
      g1 = 255;
      b2 = 0;
      g2 = 255;
      b3 = 0;
      g3 = 255;
      b4 = 0;
      g4 = 255;
    }
  }
  else {
    b1 = 0;
    g1 = 255;
    b2 = 0;
    g2 = 255;
    b3 = 0;
    g3 = 255;
    b4 = 0;
    g4 = 255;
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
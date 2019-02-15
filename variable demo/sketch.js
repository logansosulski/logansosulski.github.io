// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0;
const rectSize = 500;
let x = 0;
let y = 0;

function setup() {
  createCanvas(2000, 1000);
  const rectSize = 500;
}

function draw() {
  background(220);
  fill(random([0], [255]));
  if (state === 0) {
    x += 100;
    if (x > windowWidth - rectSize) {
      state = 1;
    }
  }
  else if (state === 1) {
    y += 100;
    if (y > windowHeight - rectSize) {
      state = 2;
    }
  }
  else if (state === 2) {
    x -= 100;
    if (x <= 0) {
      state = 3;
    }
  }
  else if (state === 3) {
    y -= 100;
    if (y <= 0) {
      state = 0;
    }
  }
  fill(random(255),random(255),random(255));
  rect(x,y,rectSize,rectSize);
}
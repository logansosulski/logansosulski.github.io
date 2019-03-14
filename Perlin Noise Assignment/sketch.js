// Perlin Noise Assignement
// Logan Sosulski
// 14/3/19
//
// Extra for Experts:
// - Did the stuff on canvas

let inc = 0.01;
let start = 0;
let rectWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  generateTerrain();
}

function generateTerrain() {
  background(255);
  fill(0);
  let xOff = start;
  for (let x = 0; x < width; x++) {
    let y = noise(xOff) * height;
    rect(x, y, rectWidth, height - y);
    xOff += inc;
  }
  start += inc;
}
// Perlin Noise Assignement
// Logan Sosulski
// 14/3/19
//
// Extra for Experts:
// - Did the stuff on canvas

let inc = 0.01;
let start = 0;
let rectWidth = 1;
let highestPoint;
let flagX;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  generateTerrain();
  drawFlag();
}

function generateTerrain() {
  background(255);
  fill(0);
  let xOff = start;
  highestPoint=height;
  flagX=0;
  for (let x = 0; x < width; x++) {
    let y = noise(xOff) * height;
    if (y <= highestPoint) {
      highestPoint = y;
      flagX = x;
    }
    rect(x, y, rectWidth, height - y);
    xOff += inc;
  }
  start += inc;
}

function drawFlag() {
  fill(255,150,0);
  strokeWeight(5);
  line(flagX,highestPoint,flagX,highestPoint-50);
}
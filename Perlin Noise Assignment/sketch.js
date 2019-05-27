// Perlin Noise Assignement
// Logan Sosulski
// 14/3/19
//
// Extra for Experts:
// - Did the extra chanllenges on canvas

//declaring the variables
let inc = 0.01;
let start = 0;
let rectWidth = 1;
let highestPoint;
let flagX;
let averageHeight;
let rectNum;

//creating the canvas based on window size
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//calling my functions
function draw() {
  generateTerrain();
  drawFlag();
  average();
}

//generating terrain based on the last point generated
function generateTerrain() {
  background(255);
  fill(0);
  let xOff = start;
  //resetting the flag variables and average height variable
  highestPoint = height;
  flagX = 0;
  averageHeight = 0;
  rectNum = 0;
  for (let x = 0; x < width; x++) {
    let y = noise(xOff) * height;
    if (y <= highestPoint) {
      //setting my flag variables
      highestPoint = y;
      flagX = x;
    }
    //adding up every rect y and counting how many their are
    averageHeight += y;
    rectNum++;
    fill(0);
    rect(x, y, rectWidth, height - y);
    xOff += inc;
  }
  start += inc;
}

//drawing a flag at the highest point on the screen
function drawFlag() {
  fill(255,150,0);
  strokeWeight(5);
  line(flagX,highestPoint,flagX,highestPoint-50);
  triangle(flagX,highestPoint-50,flagX+25,highestPoint-40, flagX, highestPoint-30);
}

//finding the average height of the rectangles
//and drawing a line and the average
function average() {
  averageHeight = averageHeight / rectNum;
  strokeWeight(3);
  line(0,averageHeight,width,averageHeight);
}
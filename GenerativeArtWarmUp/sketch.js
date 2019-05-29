// Art Replication Warm-Up
// Logan Sosulski
// 2019/04/15
//
// Extra for Experts:
// - made a pretty sick lookin' image

//Initilizing Variables
let x1;
let y1;
let x2;
let y2;

//Giving variables values, setting up the cavnas, and drawing a white background
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  x1 = width / 3+75;
  y1 = height - 100;
  x2 = width / 3+75;
  y2 = height - 100;
}

//Calls the function and tells program when to stop
function draw() {
  drawLines();
  if (frameCount === 60) {
    noLoop();
  }
}

//Picks a new semi-random point and draws a line with the previous point and the new point
function drawLines() {
  x1 = x2;
  y1 = y2;
  x2 = random(width/3+75,width-width/3-75);
  y2 = random(0,height);
  line(x1,y1,x2,y2);
}
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const STARTINGSIZE = 60;
const STARTINGLEVEL = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawFractal(width/2, height/2, STARTINGSIZE, STARTINGLEVEL);
}

function drawFractal(x, y, size, level) {
  const COLOUR_B = 255 / STARTINGLEVEL * STARTINGLEVEL / level+1;
  const COLOUR_R = 255 / STARTINGLEVEL * level-1;
  fill(COLOUR_R,0,COLOUR_B);
  quad(x, y-size*2, x+size, y, x, y+size*2, x-size, y);
  if (level > 1) {
    level = level - 1;
    drawFractal(x, y-size*2-size*0.6*2, size*0.6, level); //tops
    drawFractal(x+size+size*0.6, y, size*0.6, level); //right
    drawFractal(x, y+size*2+size*0.6*2, size*0.6, level); //bottom
    drawFractal(x-size-size*0.6, y, size*0.6, level); //left
  }
}
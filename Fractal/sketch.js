// Fractal
// Logan Sosulski
// May 27, 2019
//
// Extra for Experts:
// - Didn't have to do it          B)

//Delcaring my starting size and level
const STARTINGSIZE = 60;
const STARTINGLEVEL = 6;

//Creating the canvas and making the fractal only draw once with no stroke
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
}

//Drawing the fractal on a black background
function draw() {
  background(0);
  drawFractal(width/2, height/2, STARTINGSIZE, STARTINGLEVEL);
}


function drawFractal(x, y, size, level) {
  //Setting the colour to red and fading to blue
  const COLOUR_B = 255 / STARTINGLEVEL * STARTINGLEVEL / level;//+1;
  const COLOUR_R = 255 / STARTINGLEVEL * level;//;-1;
  fill(COLOUR_R,0,COLOUR_B);
  quad(x, y-size*2, x+size, y, x, y+size*2, x-size, y); //drawing a diamond at x,y
  if (level > 1) { //recalling the fractal while level is still above
    level = level - 1;
    //drawing diamonds on the four edges
    drawFractal(x, y-size*2-size*0.6*2, size*0.6, level); //top of current diamond
    drawFractal(x+size+size*0.6, y, size*0.6, level); //right
    drawFractal(x, y+size*2+size*0.6*2, size*0.6, level); //bottom
    drawFractal(x-size-size*0.6, y, size*0.6, level); //left
  }
}
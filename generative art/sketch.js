// Colour
// Logan Sosulski
// hggrdghzdhzrdhrdg
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 10;
let rectHeight = 50;
let colours = ["#431A34","#84A685","#9AD5A0"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //drawRowRGB(height/3);
  drawRowHSB(height/3*2);
  drawRowCustom(height/3);
}

function draw() {
  //background(0);
  //drawRowRGB(height/2);
}

function drawRowRGB(y) {
  colorMode(RGB);
  for (let x=0;x<width;x+= rectWidth){
    fill(random(255),random(255),random(255));
    rect(x,y,rectWidth,rectHeight);
  }
}

function drawRowHSB(y) {
  colorMode(HSB, 360);
  for (let x=0;x<width;x+= rectWidth){
    //fill(hue,sat,bright);
    fill(x%360,280, 300);
    rect(x,y,rectWidth,rectHeight);
  }
}

function drawRowCustom(y) {
  colorMode(RGB);
  let counter = 0;
  for (let x=0;x<width;x+=rectWidth){
    fill(colours[counter]);
    rect(x,y,rectWidth,rectHeight);
    counter += 1;
  }
}
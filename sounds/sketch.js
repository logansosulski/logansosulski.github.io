// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scribble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();
}

function draw() {
  background(220);
  randomSeed(0);
  let x = [mouseX - 100, mouseX + 100, mouseX + 100, mouseX - 100];
  let y = [mouseY - 100, mouseY - 100, mouseY + 100, mouseY + 100];
  scribble.scribbleFilling(x,y,5,50);
  scribble.scribbleRoundedRect(mouseX,mouseY,50,50);
}
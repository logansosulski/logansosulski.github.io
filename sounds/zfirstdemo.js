// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sound, reverb;

function preload() {
  sound = loadSound("assets/energy.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sound.setVolume(1);
  reverb = new p5.Reverb();
}

function draw() {
  background(220);
}

function mousePressed() {
  sound.play;
}

function keyPressed() {
  reverb.process(sound,5,1);
}
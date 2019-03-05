// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sliderR;
let sliderG;
let sliderB;
let radio;
let colourPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderR = createSlider(0,255,255);
  sliderR.position(10,10);
  sliderG = createSlider(0,255,255);
  sliderG.position(10,50);
  sliderB = createSlider(0,255,255);
  sliderB.position(10,90);
  rectMode(CENTER);
  radio = createRadio();
  radio.position(width/2-120,height-150);
  radio.option("Rectangle");
  radio.value("Rectangle");
  radio.option("Ellipse");
  colourPicker = createColorPicker("#aa55ff");
}

function draw() {
  background(sliderR.value(),sliderG.value(),sliderB.value());
  textSize(30);
  text("R",150,35);
  text(sliderR.value(),200,35);
  text("G",150,75);
  text(sliderG.value(),200,75);
  text("B",150,110);
  text(sliderB.value(),200,110);
  if (radio.value() === "Rectangle") {
    rect(width/2,height/2,50,50);
  }
  else {
    ellipse(width/2,height/2,50,50);
  }
}

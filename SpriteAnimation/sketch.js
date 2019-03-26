// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sansCostumes = [];
let direction = "south";
let speed = 10;
let counter = 0;
let keyDown = false;
let x;
let y;

function preload() {
  for (let i=1;i<=16;i++) {
    sansCostumes.push(loadImage("assets/sans" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  x = width/2;
  y = height/2;
}

function draw() {
  background(0,255,255);
  move();
  nextFrame();
  stayInBounds();
  image(sansCostumes[counter],x,y);
}

function keyTyped() {
  keyDown = true;
  if (key === "w") {
    direction = "north";
    counter = 4;
  }
  if (key === "a") {
    direction = "west";
    counter = 12;
  }
  if (key === "s") {
    direction = "south";
    counter = 0;
  }
  if (key === "d") {
    direction = "east";
    counter = 8;
  }
}

function keyReleased() {
  keyDown = false;
}

function move() {
  if (direction === "north") {
    if (counter === 7) {
      counter = 4;
    }
    if (keyDown === true) {
      y-=10;
    }
  }
  if (direction === "east") {
    if (counter === 11) {
      counter = 8;
    }
    if (keyDown === true) {
      x+=10;
    }
  }
  if (direction === "south") {
    if (counter === 3) {
      counter = 0;
    }
    if (keyDown === true) {
      y+=10;
    }
  }
  if (direction === "west") {
    if (counter === 15) {
      counter = 12;
    }
    if (keyDown === true) {
      x-=10;
    }
  }
}

function stayInBounds() {
  if (x+100 > width) {
    x = width-100;
  }
  if (x-100 < 0) {
    x = 0+100;
  }
  if (y+150 > height) {
    y = height-150;
  }
  if (y-150 < 0) {
    y = 0+150;
  }
}

function nextFrame() {
  if (frameCount % speed === 0) {
    counter++;
  }
}
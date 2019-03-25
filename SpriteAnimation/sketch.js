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
  background(255);
  move();
  nextFrame();
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
  global x;
  global y;
  let x = width/2;
  let y = height/2;
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

function nextFrame() {
  if (frameCount % speed === 0) {
    counter++;
  }
}
// Sprite Animation
// Logan Sosulski
// 2019/03/27
//
// Extra for Experts:
// Did the challenges from canvas

//initilizing my variables
let sansCostumes = [];
let direction = "south";
let speed = 10;
let counter = 0;
let keyDown = false; //state variable to decide if a key is pressed or not
let x;
let y;

//load all the costumes and put them in an array
function preload() {
  for (let i=1;i<=16;i++) {
    sansCostumes.push(loadImage("assets/sans" + i + ".png"));
  }
}

//creating the canvas, giving my x and y values depending on the canvas size and setting the image mode to center
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  x = width/2;
  y = height/2;
}

//calling all my functions and drawing the sprite
function draw() {
  background(0,255,255);
  move();
  nextFrame();
  stayInBounds();
  image(sansCostumes[counter],x,y);
}

//figuring out which key was pressed and setting the costume/which direction to move in accordingly
function keyTyped() {
  keyDown = true; //change variable to say a key is being pressed
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

//change variable to say a key is not being pressed
function keyReleased() {
  keyDown = false;
}

//switches the costumes and moves sprite depending on which direction the sprite is facing
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

//makes sprite stay in bounds
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

//deciding when to switch to next frame
function nextFrame() {
  if (frameCount % speed === 0) {
    counter++;
  }
}
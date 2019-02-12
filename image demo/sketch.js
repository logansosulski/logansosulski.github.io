// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let img;
let size = 200;
let imgArray = [];

function preload() {
  img = loadImage("assets/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(img,mouseX,mouseY,size,size);
  for (let i=0; i<imgArray.length; i++) {
    image(img, imgArray[i][0], imgArray[i][1], imgArray[i][2], imgArray[i][2]);
  }
}

function mouseWheel(event) {
  if (event.delta > 0) {
    size -= 50;
  }
  else {
    size += 50;
  }
  if (size <= 50) {
    size += 50;
  }
}

function mousePressed() {
  let cur = [mouseX, mouseY, size];
  imgArray.push(cur);
  image(img,mouseX,mouseY,size,size);
}
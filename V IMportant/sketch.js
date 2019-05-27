// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let walkers = [];
const NUM_WALKERS = 3000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<NUM_WALKERS;i++) {
    walkers.push(new Walker(random(width),random(height)));
  }
}

function draw() {
  background(255);
  for (let i=0;i<NUM_WALKERS;i++) {
    walkers[i].display();
    walkers[i].move();
  }
}

class Walker {
  constructor(x_,y_) {
    this.x = x_;
    this.y = y_;
    this.speed = 1;
    this.size = 1;
    this.c = color(0,random(255),random(255));
  }

  display() {
    rectMode(CENTER);
    fill(this.c);
    rect(this.x,this.y,this.size,this.size);
  }

  move() {
    let direction = Math.floor(random(4));
    if (direction === 0) {
      this.x += this.speed;
    }
    else if (direction === 1) {
      this.y += this.speed;
    }
    else if (direction === 2) {
      this.x -= this.speed;
    }
    else if (direction === 3) {
      this.y -= this.speed;
    }
  }
}
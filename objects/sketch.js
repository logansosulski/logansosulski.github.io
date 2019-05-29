// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pArray = [];
let gear;

function preload() {
  gear = loadImage("/assets/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
}

function draw() {
  background(0);
  pArray.push(new Particle(mouseX,mouseY)); 
  for (let i = 0; i < pArray.length; i++) {
    pArray[i].move();
    pArray[i].display();
    if (pArray[i].alive() === false) {
      pArray.splice(i,1);
      i--;
    }
  }
}

function mouseClicked() {
  pArray.push(new Particle(mouseX,mouseY));
}

class Particle {
  constructor(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.c = color(map(x_,0,width,0,255),map(y_,0,height,0,255),map(x_,0,width,255,0));
    this.size = random(20,30);
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-1,1);
    this.lifeTime = int(random(60,90));
    this.maxLifetime = this.lifeTime;
    this.GRAV = -0.03;
    this.noiseLoc = random(0,10);
    this.img = gear;
  }


  move() {
    this.ySpeed += this.GRAV;
    //this.x += this.xSpeed;
    this.x += map(noise(this.noiseLoc),0.1,1,-1,1);
    this.y += this.ySpeed;
    this.lifeTime -= 1;
    this.floorCollision();
  }

  display() {
    ellipseMode(CENTER);
    fill(this.c);
    push();
    translate(this.x,this.y);
    scale(map(this.lifeTime,0,this.maxLifetime,0,1));
    //ellipse(0,0,this.size,this.size);
    image(this.img,0,0,this.size,this.size);
    pop();
  }

  alive() {
    if (this.lifeTime > 0) return true;
    else return false;
  }

  floorCollision() {
    if (this.y > height) {
      this.y = height;
      this.ySpeed = this.ySpeed *-1 - 1;

    }
  }
}
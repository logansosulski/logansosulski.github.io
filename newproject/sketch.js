// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pos;
let velo;
let grav;
let mouse;
let centre;
let towardsMouse;
let m;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // pos = createVector(width/2,height/2);
  // velo = createVector(random(-1,1),random(-10,-5));
  // grav = createVector(0,0.1);
  m = new Mover(width/2,height/2);
}

function draw() {
  background(255);
  //   velo.add(grav);
  //   pos.add(velo);
  //   ellipse(pos.x,pos.y,50,50);
  //   mouse = createVector(mouseX,mouseY);
  //   centre = createVector(width/2,height/2);
  //   towardsMouse = mouse.sub(centre);
  //   towardsMouse.normalize();
  //   towardsMouse.mult(50);
  //   m = towardsMouse.mag();
  //   push();
  //   translate(width/2,height/2);
  //   line(0,0,towardsMouse.x,towardsMouse.y);
  //   textSize(30);
  //   text(m,50,50);
  //   pop();
  m.move();
  m.display();
}

class Mover {
  constructor(x_,y_) {
    this.size(10);
    this.pos = createVector(x_,y_);
    this.velo = createVector(0,0);
    this.accel = createVector(0,0);
  }

  move() {
    this.accel = p5.Vector.random20().mult(2);
    this.velo.add(this.accel);
    this.pos.add(this.velo);
    this.velo.limit(5);
  }

  display() {
    ellipseMode(CENTER);
    push();
    translate(this.pos.x,this.pos.y);
    ellipse(0,0,this.size,this.size);
    pop();
  }
}
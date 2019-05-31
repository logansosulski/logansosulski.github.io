// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const MAPWIDTH = 3000;
const MAPHEIGHT = 2000;
const TILESIZE = 100;
let mapArray = [];
let pArray= [];

function setup() {
  createCanvas(MAPWIDTH, MAPHEIGHT);
  background(0);
  drawMap();
}

function draw() {
  moveMap();
  for (let i = 0; i < pArray.length; i++) {
    pArray[i].display();
  }
}

function mouseClicked() {
  pArray.push(new Unit(mouseX,mouseY, 1));
}

function drawMap() {
  for (let x = 0; x < MAPWIDTH; x += TILESIZE) {
    for (let y = 0; y < MAPWIDTH; y += TILESIZE) {
      let mapData = [x,y];
      mapArray.push(mapData);
    }
  }
  for (let i = 0; i < mapArray.length; i++) {
    //fill(10,random(100,200),10);
    rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
  }
}

function moveMap() {
  const DISTANCEMOVED = 10;
  fill(255);

  if (mouseX > windowWidth - 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      mapArray[i][1] -= DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX > windowWidth - 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      mapArray[i][1] += DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX < 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      mapArray[i][1] -= DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX < 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      mapArray[i][1] += DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX > windowWidth - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }
}

class Unit {
  constructor(x_, y_, team_) {
    this.x = x_;
    this.y = y_;
    this.size = 10;
    this.movement = 30;
    this.health = 150;
    this.pay = 3;
    this.team = team_;
    this.img = loadImage('assets/gear' + 'team_' + '.png');
  }


  //movement() {
    
  //}

  display() {
    //imageMode(CENTER);
    if (this.team === 0) {
      fill(0,0,255);
    }
    else {
      fill(255,0,0);
    }
    ellipseMode(CENTER);
    ellipse(this.x,this.y,this.size,this.size);
    //image(this.img,0,0,this.size,this.size);
  }

  endTurn() {
    this.movement = 30;
    this.health += 5;
    if (this.health > 150) {
      this.health = 150;
    }
  }
}
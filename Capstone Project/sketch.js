// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const MAPWIDTH = 3000;
const MAPHEIGHT = 2000;
const TILESIZE = 100;
const DISTANCEMOVED = 10;
let distX = 0;
let distY = 0;
let selectedSquare;
let mapArray = [];
let units = [];
let cities = [];

function setup() {
  createCanvas(MAPWIDTH, MAPHEIGHT);
  background(0);
  drawMap();
}

function draw() {
  moveMap();
  displayObjects();
}

function displayObjects() {
  for (let i = 0; i < cities.length; i++) {
    cities[i].display();
  }
  for (let i = 0; i < units.length; i++) {
    units[i].display();
  }
}

function mouseClicked() {
  cities.push(new City(2, 3, "blue"));
  units.push(new Unit(3, 3, "blue"));
  //find which square the mouse is over
  findSquare();
}

function drawMap() {
  rectMode(CORNER);
  for (let x = 0; x < MAPWIDTH; x += TILESIZE) {
    for (let y = 0; y < MAPHEIGHT; y += TILESIZE) {
      let mapData = [x,y];
      mapArray.push(mapData);
    }
  }
  for (let i = 0; i < mapArray.length; i++) {
    //fill(10,random(100,200),10);
    rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
  }
}

function findSquare() {
  rectMode(CORNER);
  for (let i = 0; i < mapArray.length; i++) {
    if (mouseX > mapArray[i][0] && mouseX < mapArray[i][0] + TILESIZE && mouseY > mapArray[i][1] && mouseY < mapArray[i][1] + TILESIZE) {
      fill(0,255,0,50);
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
      let mapData = [mapArray[i][0] - distX, mapArray[i][1] - distY];
      print(mapData);
      selectedSquare = mapData;
    }
    else {
      fill(255);
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  } 
}

function highlightSelected() {
  
}

function moveMap() {
  fill(255);
  rectMode(CORNER);
  if (mouseX > windowWidth - 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      mapArray[i][1] -= DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX -= DISTANCEMOVED;
    distY -= DISTANCEMOVED;
  }

  else if (mouseX > windowWidth - 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      mapArray[i][1] += DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX -= DISTANCEMOVED;
    distY += DISTANCEMOVED;
  }

  else if (mouseX < 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      mapArray[i][1] -= DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX += DISTANCEMOVED;
    distY -= DISTANCEMOVED;
  }

  else if (mouseX < 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      mapArray[i][1] += DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX += DISTANCEMOVED;
    distY += DISTANCEMOVED;
  }

  else if (mouseX > windowWidth - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX -= DISTANCEMOVED;
  }

  else if (mouseX < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX += DISTANCEMOVED;
  }

  else if (mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distY -= DISTANCEMOVED;
  }

  else if (mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distY += DISTANCEMOVED;
  }

  if (mapArray[0][0] > 0) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX -= DISTANCEMOVED;
  }

  if (mapArray[0][1] > 0) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distY -= DISTANCEMOVED;
  }

  if (mapArray[mapArray.length-1][0] < windowWidth-TILESIZE) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX += DISTANCEMOVED;
  }

  if (mapArray[mapArray.length-1][1] < windowHeight-TILESIZE) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distY += DISTANCEMOVED;
  }
}

class Unit {
  constructor(x_, y_, team_) {
    this.x = x_;
    this.y = y_;
    this.team = team_;
    this.size = 30;
    this.xMoved = 0;
    this.yMoved = 0;
    this.movement = 30;
    this.health = 150;
    this.pay = 3;
    this.img = loadImage("assets/gear.png");
  }


  //movement() {
    
  //}

  display() {
    //imageMode(CENTER);
    if (this.team === "blue") {
      fill(0,0,255);
    }
    else {
      fill(255,0,0);
    }
    ellipseMode(CENTER);
    ellipse(this.x*TILESIZE-TILESIZE/2+distX, this.y*TILESIZE-TILESIZE/2+distY, this.size, this.size);
  }

  location() {
    let unitPos = [this.x,this.y];
    return unitPos;
  }

  team() {
    return this.team;
  }

  defendCity() {
    this.health += 7;
  }

  endTurn() {
    this.movement = 30;
    this.health += 3;
    if (this.health > 15) {
      this.health = 15;
    }
  }
}

class City {
  constructor(x_,y_,team_) {
    this.x = x_;
    this.y = y_;
    this.team = team_;
    this.size = 45;
    this.pay = 100;
  }

  display() {
    if (this.team === "blue") {
      fill(0,0,255,50);
    }
    else {
      fill(255,0,0,50);
    }
    rectMode(CENTER);
    rect(this.x*TILESIZE-TILESIZE/2+distX, this.y*TILESIZE-TILESIZE/2+distY, this.size, this.size);
  }

  underAttack() {
    for (let i = 0; i < units.length; i++) { 
      if (units[i].location()[0] === this.x && units[i].location()[1] === this.y && units[i].team() === this.team) {
        units[i].defend();
      }
    }
  }
}
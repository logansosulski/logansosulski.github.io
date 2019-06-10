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
let mapArray = [];
let units= [];

function setup() {
  createCanvas(MAPWIDTH, MAPHEIGHT);
  background(0);
  drawMap();
}

function draw() {
  moveMap();
  for (let i = 0; i < units.length; i++) {
    units[i].display();
  }
}

function mouseClicked() {
  units.push(new Unit(1, 1, 1));

  //find which square the mouse is over
  let mousCol = mouseX;
  print(mousCol);
  //print(mousRow);
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
  fill(255);

  if (mouseX > windowWidth - 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      mapArray[i][1] -= DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveNorthWithMap();
      units[i].moveWestWithMap();
    }
  }

  else if (mouseX > windowWidth - 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      mapArray[i][1] += DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveSouthWithMap();
      units[i].moveWestWithMap();
    }
  }

  else if (mouseX < 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      mapArray[i][1] -= DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveNorthWithMap();
      units[i].moveEastWithMap();
    }
  }

  else if (mouseX < 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      mapArray[i][1] += DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveSouthWithMap();
      units[i].moveEastWithMap();
    }
  }

  else if (mouseX > windowWidth - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveWestWithMap();
    }
  }

  else if (mouseX < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveEastWithMap();
    }
  }

  else if (mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveNorthWithMap();
    }
  }

  else if (mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveSouthWithMap();
    }
  }

  if (mapArray[0][0] > 0) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveWestWithMap();
    }
  }

  if (mapArray[0][1] > 0) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveNorthWithMap();
    }
  }

  if (mapArray[mapArray.length-1][0] < windowWidth-TILESIZE) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveEastWithMap();
    }
  }

  if (mapArray[mapArray.length-1][1] < windowHeight-TILESIZE) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    for (let i = 0; i < units.length; i++) {
      units[i].moveSouthWithMap();
    }
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
    if (this.team === 0) {
      fill(0,0,255);
    }
    else {
      fill(255,0,0);
    }
    ellipseMode(CENTER);
    ellipse(this.x*TILESIZE-TILESIZE/2+this.xMoved, this.y*TILESIZE-TILESIZE/2 +this.yMoved, this.size, this.size);
    image(this.img,0,0,this.size,this.size);
  }

  moveNorthWithMap() {
    this.yMoved -= DISTANCEMOVED;
  }

  moveEastWithMap() {
    this.xMoved += DISTANCEMOVED;
  }

  moveSouthWithMap() {
    this.yMoved += DISTANCEMOVED;
    
  }

  moveWestWithMap() {
    this.xMoved -= DISTANCEMOVED;
  }

  location() {
    let unitPos = [this.x,this.y];
    return unitPos;
  }

  team() {
    return this.team;
  }

  defend() {
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
    this.size = 30;
    this.pay = 100;
  }

  underAttack() {
    for (let i = 0; i < units.length; i++) { 
      if (units[i].location()[0] === this.x && units[i].location()[1] === this.y && units[i].team() === this.team) {
        units[i].defend();
      }
    }
  }
}
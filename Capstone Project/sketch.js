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
let selectedUnits = [];
let selectedCities = [];

function setup() {
  createCanvas(MAPWIDTH, MAPHEIGHT);
  background(0);
  drawMap();
}

function draw() {
  moveMap();
  displayObjects();
  selectedUI();
}

function drawMap() {
  rectMode(CORNER);
  for (let x = 0; x < MAPWIDTH; x += TILESIZE) {
    for (let y = 0; y < MAPHEIGHT; y += TILESIZE) {
      let mapData = [x, y];
      mapArray.push(mapData);
    }
  }
  for (let i = 0; i < mapArray.length; i++) {
    rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
  }
}

function redrawMap() {
  fill(255);
  rectMode(CORNER);
  for (let i = 0; i < mapArray.length; i++) {
    rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
  }
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

function displayObjects() {
  for (let i = 0; i < cities.length; i++) {
    cities[i].display();
  }
  for (let i = 0; i < units.length; i++) {
    units[i].display();
  }
}

function keyPressed() {
  cities.push(new City(2, 3, "blue"));
  units.push(new Unit(3, 3, "blue"));
}

function mousePressed() {
  //find which square the mouse is over
  if (mouseButton === LEFT) {
    redrawMap();
    findSquare();
    highlightSelected();
  }
  else if (mouseButton === CENTER) {
    for (let i = 0; i < selectedUnits.length; i++) {
      if (selectedUnits[i].info()[3] >= 5) {
        selectedUnits[i].move();
      }
    }
    redrawMap();
    fill(0, 255, 0, 70);
    rectMode(CORNER);
    rect(selectedSquare[0], selectedSquare[1], TILESIZE, TILESIZE);
  }
}

function findSquare() {
  for (let i = 0; i < mapArray.length; i++) {
    if (mouseX > mapArray[i][0] && mouseX < mapArray[i][0] + TILESIZE && mouseY > mapArray[i][1] && mouseY < mapArray[i][1] + TILESIZE) {
      //let mapData = [(mapArray[i][0] - distX) / TILESIZE, (mapArray[i][1] - distY) / TILESIZE];
      let mapData = [mapArray[i][0], mapArray[i][1]];
      print(mapData);
      selectedSquare = mapData;
    }
  } 
}

function highlightSelected() {
  selectedUnits = [];
  selectedCities = [];
  fill(0, 255, 0, 70);
  rectMode(CORNER);
  rect(selectedSquare[0], selectedSquare[1], TILESIZE, TILESIZE);
  for (let i = 0; i < units.length; i++) {
    if (units[i].info()[0] === (selectedSquare[0] - distX) / TILESIZE && units[i].info()[1] === (selectedSquare[1] - distY) / TILESIZE) {
      selectedUnits.push(units[i]);
    }
  }
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].info()[0] === (selectedSquare[0] - distX) / TILESIZE && cities[i].info()[1] === (selectedSquare[1] - distY) / TILESIZE) {
      selectedCities.push(units[i]);
    }
  }
}

function selectedUI() {
  for (let i = 0; i < selectedUnits.length; i++) {
    fill(255);
    rectMode(CORNER);
    rect(windowWidth - 250, 50 * i, 300, 50);
    fill(0);
    text("Movement: " + selectedUnits[i].info()[3] + "   Health: " + selectedUnits[i].info()[4], windowWidth - 220, 50 * i + 25);
  }

  for (let i = 1; i < selectedCities.length + 1; i++) {
    fill(255);
    rectMode(CORNER);
    rect(windowWidth - 250, windowHeight - 50 * i, 300, 50);
    fill(0);
    text("Produce Unit", windowWidth - 220, windowHeight - 50 * i + 25);
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

  move() {
    if (mouseX > selectedSquare[0] + TILESIZE && mouseY > selectedSquare[1] && mouseY < selectedSquare[1] + TILESIZE) {
      this.x += 1;
      this.movement -= 5;
      selectedSquare[0] += TILESIZE;
    }

    else if (mouseX < selectedSquare[0] && mouseY > selectedSquare[1] && mouseY < selectedSquare[1] + TILESIZE) {
      this.x -= 1;
      this.movement -= 5;
      selectedSquare[0] -= TILESIZE;
    }

    else if (mouseY > selectedSquare[1] + TILESIZE && mouseX > selectedSquare[0] && mouseX < selectedSquare[0] + TILESIZE) {
      this.y += 1;
      this.movement -= 5;
      selectedSquare[1] += TILESIZE;
    }

    else if (mouseY < selectedSquare[1] && mouseX > selectedSquare[0] && mouseX < selectedSquare[0] + TILESIZE) {
      this.y -= 1;
      this.movement -= 5;
      selectedSquare[1] -= TILESIZE;
    }
  }

  display() {
    //imageMode(CENTER);
    if (this.team === "blue") {
      fill(0,0,255);
    }
    else {
      fill(255,0,0);
    }
    ellipseMode(CENTER);
    ellipse(this.x * TILESIZE + TILESIZE / 2 + distX, this.y * TILESIZE + TILESIZE / 2 + distY, this.size, this.size);
  }

  info() {
    let unitInfo = [this.x, this.y, this.team, this.movement, this.health, this.pay];
    return unitInfo;
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
  constructor(x_, y_, team_) {
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
    rect(this.x * TILESIZE + TILESIZE / 2 + distX, this.y * TILESIZE + TILESIZE / 2 + distY, this.size, this.size);
  }

  info() {
    let cityInfo = [this.x, this.y, this.team, this.pay];
    return cityInfo;
  }

  underAttack() {
    for (let i = 0; i < units.length; i++) { 
      if (units[i].info()[0] === this.x && units[i].info()[1] === this.y && units[i].info()[2] === this.team) {
        units[i].defend();
      }
    }
  }
}
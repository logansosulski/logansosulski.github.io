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
let gearImg;
let teamBlueMoney = 500;
let teamRedMoney = 500;
let combatBlueTeam = [];
let combatRedTeam = [];
let cityUnderAttack = [];

function preload() {
  gearImg = loadImage("assets/gear.png");
}

function setup() {
  createCanvas(MAPWIDTH, MAPHEIGHT);
  background(0);
  drawMap();
  startingObjects();
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
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
  }

  else if (mouseX > windowWidth - 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      mapArray[i][1] += DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX -= DISTANCEMOVED;
    distY += DISTANCEMOVED;
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
  }

  else if (mouseX < 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      mapArray[i][1] -= DISTANCEMOVED;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX += DISTANCEMOVED;
    distY -= DISTANCEMOVED;
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
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
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
  }

  else if (mouseX < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX += DISTANCEMOVED;
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
  }

  else if (mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] -= DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distY -= DISTANCEMOVED;
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
  }

  else if (mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distY += DISTANCEMOVED;
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
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
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
  }

  if (mapArray[mapArray.length-1][0] < windowWidth-TILESIZE) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distX += DISTANCEMOVED;
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
  }

  if (mapArray[mapArray.length-1][1] < windowHeight-TILESIZE) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += DISTANCEMOVED; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
    distY += DISTANCEMOVED;
    selectedSquare = [];
    selectedUnits = [];
    selectedCities = [];
  }
}

function displayObjects() {
  for (let i = 0; i < cities.length; i++) {
    cities[i].display();
  }
  for (let i = 0; i < units.length; i++) {
    units[i].display();
  }
  fill(255);
  rectMode(CORNER);
  rect(windowWidth - 125, windowHeight - 125, 125, 125);
  imageMode(CENTER);
  image(gearImg, windowWidth - 62.5, windowHeight - 62.5, 100, 100);
}

function startingObjects() {
  cities.push(new City(1, 5, "blue"));
  cities.push(new City(1, 14, "blue"));

  cities.push(new City(6, 2, "blue"));
  cities.push(new City(7, 8, "blue"));
  cities.push(new City(7, 11, "blue"));
  cities.push(new City(6, 17, "blue"));

  cities.push(new City(12, 5, "blue"));
  cities.push(new City(12, 14, "blue"));



  cities.push(new City(28, 5, "red"));
  cities.push(new City(28, 14, "red"));

  cities.push(new City(23, 2, "red"));
  cities.push(new City(22, 8, "red"));
  cities.push(new City(22, 11, "red"));
  cities.push(new City(23, 17, "red"));

  cities.push(new City(16, 5, "red"));
  cities.push(new City(16, 14, "red"));

  units.push(new Unit(12, 5, "blue"));
  units.push(new Unit(12, 14, "blue"));

  units.push(new Unit(7, 5, "blue"));
  units.push(new Unit(7, 14, "blue"));

  units.push(new Unit(2, 3, "blue"));
  units.push(new Unit(1, 5, "blue"));
  units.push(new Unit(2, 7, "blue"));

  units.push(new Unit(2, 12, "blue"));
  units.push(new Unit(1, 14, "blue"));
  units.push(new Unit(2, 16, "blue"));

  units.push(new Unit(16, 5, "red"));
  units.push(new Unit(16, 14, "red"));

  units.push(new Unit(22, 5, "red"));
  units.push(new Unit(22, 14, "red"));

  units.push(new Unit(27, 3, "red"));
  units.push(new Unit(28, 5, "red"));
  units.push(new Unit(27, 7, "red"));

  units.push(new Unit(27, 12, "red"));
  units.push(new Unit(28, 14, "red"));
  units.push(new Unit(27, 16, "red"));
}

function mousePressed() {
  //find which square the mouse is over
  if (mouseButton === LEFT) {
    if (mouseX >= windowWidth - 125 && mouseX < windowWidth && mouseY >= windowHeight - 125 && mouseY < windowHeight) {
      endTurn();
    }
    redrawMap();
    findSquare();
    highlightSelected();
  }
  else if (mouseButton === CENTER) {
    moveUnits();
    redrawMap();
    highlightSelected();
    checkForCombat();
  }
}

function findSquare() {
  for (let i = 0; i < mapArray.length; i++) {
    if (mouseX > mapArray[i][0] && mouseX < mapArray[i][0] + TILESIZE && mouseY > mapArray[i][1] && mouseY < mapArray[i][1] + TILESIZE) {
      //let mapData = [(mapArray[i][0] - distX) / TILESIZE, (mapArray[i][1] - distY) / TILESIZE];
      let mapData = [mapArray[i][0], mapArray[i][1]];
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

function moveUnits() {
  let haveMovement = 0;
  for (let i = 0; i < selectedUnits.length; i++) {
    if (selectedUnits[i].info()[3] >= 5) {
      selectedUnits[i].move();
      haveMovement += 1;
    }
  }
  if (haveMovement > 0) {
    if (mouseX > selectedSquare[0] + TILESIZE && mouseY > selectedSquare[1] && mouseY < selectedSquare[1] + TILESIZE) {
      selectedSquare[0] += TILESIZE;
    }
    else if (mouseX < selectedSquare[0] && mouseY > selectedSquare[1] && mouseY < selectedSquare[1] + TILESIZE) {
      selectedSquare[0] -= TILESIZE;
    }
    else if (mouseY > selectedSquare[1] + TILESIZE && mouseX > selectedSquare[0] && mouseX < selectedSquare[0] + TILESIZE) {
      selectedSquare[1] += TILESIZE;
    }
    else if (mouseY < selectedSquare[1] && mouseX > selectedSquare[0] && mouseX < selectedSquare[0] + TILESIZE) {
      selectedSquare[1] -= TILESIZE;
    }
  }
  else {
    selectedSquare = [];
  }
}

function endTurn() {
  for (let i = 0; i < cities.length; i++) {
    cities[i].endTurn();
  }
  for (let i = 0; i < units.length; i++) {
    units[i].endTurn();
    if (units[i].info()[6] === false) {
      units.splice(i, 1);
      i--;
    }
  }
}

function checkForCombat() {
  combatBlueTeam = [];
  combatRedTeam = [];
  cityUnderAttack = [];
  for (let i = 0; i < units.length; i++) {
    for (let j = i + 1; j < units.length; j++) {
      if (units[i].info()[2] === "blue" && units[j].info()[2] === "red" || units[i].info()[2] === "red" && units[j].info()[2] === "blue") {
        if (units[i].info()[0] ===  units[j].info()[0] && units[i].info()[1] ===  units[j].info()[1]) {
          if (units[i].info()[2] === "blue") {
            combatBlueTeam.push(units[i]);
            combatRedTeam.push(units[j]);
          }
          else {
            combatBlueTeam.push(units[j]);
            combatRedTeam.push(units[i]);
          }
        }
      }
    }
  }
  if (combatBlueTeam.length > 0) {
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].info()[0] ===  combatBlueTeam[0].info()[0] && cities[i].info()[1] ===  combatBlueTeam[0].info()[1]) {
        cities[i].underAttack();
        cityUnderAttack.push(cities[i]);
      }
    }
    combat();
  }
}

function combat() {
  for (let i = 0; i < combatBlueTeam.length; i++) {
    if (combatRedTeam.length > 0) {
      if (combatRedTeam[0].info()[4] > 0) {
        combatRedTeam[0].hurt();
      }
      else {
        combatBlueTeam.splice(0, 1);
      }
    }
  }
  for (let i = 0; i < combatRedTeam.length; i++) {
    if (combatBlueTeam.length > 0) {
      if (combatBlueTeam[0].info()[4] > 0) {
        combatBlueTeam[0].hurt();
      }
      else {
        combatBlueTeam.splice(0, 1);
      }
    }
  }
  if (combatBlueTeam.length > 0 && combatRedTeam.length > 0) {
    combat();
  }
  else {
    if (combatBlueTeam.length > 0) {
      if (cityUnderAttack.length > 0 && cityUnderAttack[0].info()[2] === "red") {
        cityUnderAttack[0].swapTeams();
      }
    }
    else {
      if (cityUnderAttack.length > 0 && cityUnderAttack[0].info()[2] === "blue") {
        cityUnderAttack[0].swapTeams();
      }
    }
    for (let i = 0; i < units.length; i++) {
      if (units[i].info()[6] === false) {
        units.splice(i, 1);
        i--;
      }
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
    this.health = 15;
    this.pay = 20;
    this.alive = "true";
  }

  move() {
    if (mouseX > selectedSquare[0] + TILESIZE && mouseY > selectedSquare[1] && mouseY < selectedSquare[1] + TILESIZE) {
      this.x += 1;
      this.movement -= 5;
    }
    else if (mouseX < selectedSquare[0] && mouseY > selectedSquare[1] && mouseY < selectedSquare[1] + TILESIZE) {
      this.x -= 1;
      this.movement -= 5;
    }
    else if (mouseY > selectedSquare[1] + TILESIZE && mouseX > selectedSquare[0] && mouseX < selectedSquare[0] + TILESIZE) {
      this.y += 1;
      this.movement -= 5;
    }
    else if (mouseY < selectedSquare[1] && mouseX > selectedSquare[0] && mouseX < selectedSquare[0] + TILESIZE) {
      this.y -= 1;
      this.movement -= 5;
    }
  }

  display() {
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
    let unitInfo = [this.x, this.y, this.team, this.movement, this.health, this.pay, this.alive];
    return unitInfo;
  }

  defendCity() {
    this.health += 5;
  }

  endTurn() {
    this.movement = 30;
    this.health += 3;
    if (this.health > 15) {
      this.health = 15;
    }
    if (this.team === "blue") {
      if (teamBlueMoney <= 0) {
        this.alive = false;
      }
      else {
        teamBlueMoney -= this.pay;
      }
    }
    else {
      if (teamRedMoney <= 0) {
        this.alive = false;
      }
      else {
        teamRedMoney -= this.pay;
      }
    }
  }

  hurt() {
    this.health -= 3;
    if (this.health <= 0) {
      this.alive = false;
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
      fill(0,0,255);
    }
    else {
      fill(255,0,0);
    }
    rectMode(CENTER);
    rect(this.x * TILESIZE + TILESIZE / 2 + distX, this.y * TILESIZE + TILESIZE / 2 + distY, this.size, this.size);
  }

  info() {
    let cityInfo = [this.x, this.y, this.team, this.pay];
    return cityInfo;
  }

  swapTeams() {
    if (this.team === "blue") {
      this.team = "red";
    }
    else {
      this.team = "blue";
    }
  }

  endTurn() {
    if (this.team === "blue") {
      teamBlueMoney += this.pay;
    }
    else {
      teamRedMoney += this.pay;
    }
  }

  underAttack() {
    for (let i = 0; i < units.length; i++) { 
      if (units[i].info()[0] === this.x && units[i].info()[1] === this.y && units[i].info()[2] === this.team) {
        units[i].defendCity();
      }
    }
  }
}
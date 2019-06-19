// Strategy Game
// Logan Sosulski
// 2019/06/19
//
// Extra for Experts:
// - Created a functioning strategy game that is adaptable with room for different features, maps, and gamemodes

//Initalizing global variables and constants
const MAPWIDTH = 3000;
const MAPHEIGHT = 2000;
const TILESIZE = 100;
const DISTANCEMOVED = 15;
let distX = 0;
let distY = 0;
let selectedSquare;
let mapArray = [];
let units = [];
let cities = [];
let selectedUnits = [];
let selectedCities = [];
let chosenUnits = [];
let gearImg;
let teamBlueMoney = 500;
let teamRedMoney = 500;
let attackers = [];
let defenders = [];
let cityUnderAttack = [];
let playStyle;

//Loading the end turn image
function preload() {
  gearImg = loadImage("assets/gear.png");
}

//Creating the cavnas, drawing the map, units, and cities, and choosing the NPC playstyle
function setup() {
  createCanvas(MAPWIDTH, MAPHEIGHT);
  background(0);
  drawMap();
  startingObjects();
  chooseEnemyNPCPlayStyle();
}

//Checking to see if the map needs to move and drawing the map, objects, and ui
function draw() {
  moveMap();
  redrawMap();
  displayObjects();
  selectedUI();
}

//Function to create the map at a set size
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

//Function to draw the map
function redrawMap() {
  fill(255);
  rectMode(CORNER);
  for (let i = 0; i < mapArray.length; i++) {
    rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
  }
}

//Checking to see where the mouse is moving the map accordingly
function moveMap() {
  fill(255);
  rectMode(CORNER);
  if (mouseX > windowWidth - 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      mapArray[i][1] -= DISTANCEMOVED;
    }
    distX -= DISTANCEMOVED;
    distY -= DISTANCEMOVED;
  }

  else if (mouseX > windowWidth - 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
      mapArray[i][1] += DISTANCEMOVED;
    }
    distX -= DISTANCEMOVED;
    distY += DISTANCEMOVED;
  }

  else if (mouseX < 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      mapArray[i][1] -= DISTANCEMOVED;
    }
    distX += DISTANCEMOVED;
    distY -= DISTANCEMOVED;
  }

  else if (mouseX < 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
      mapArray[i][1] += DISTANCEMOVED;
    }
    distX += DISTANCEMOVED;
    distY += DISTANCEMOVED;
  }

  else if (mouseX > windowWidth - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
    }
    distX -= DISTANCEMOVED;
  }

  else if (mouseX < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
    }
    distX += DISTANCEMOVED;
  }

  else if (mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] -= DISTANCEMOVED; 
    }
    distY -= DISTANCEMOVED;
  }

  else if (mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += DISTANCEMOVED; 
    }
    distY += DISTANCEMOVED;
  }

  if (mapArray[0][0] > 0) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= DISTANCEMOVED; 
    }
    distX -= DISTANCEMOVED;
  }

  if (mapArray[0][1] > 0) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] -= DISTANCEMOVED; 
    }
    distY -= DISTANCEMOVED;
  }

  if (mapArray[mapArray.length-1][0] < windowWidth-TILESIZE) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += DISTANCEMOVED; 
    }
    distX += DISTANCEMOVED;
  }

  if (mapArray[mapArray.length-1][1] < windowHeight-TILESIZE) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += DISTANCEMOVED; 
    }
    distY += DISTANCEMOVED;
  }
}

//Drawing the cities and units
function displayObjects() {
  for (let i = 0; i < cities.length; i++) {
    cities[i].display();
  }
  for (let i = 0; i < units.length; i++) {
    units[i].display();
  }
}

//Putting set units and cities in the starting locations
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

//Calling different function based on which mouse button is pressed
function mousePressed() {
  if (mouseButton === LEFT) {
    UIClicked(); //If the mouse is over the ui when click the ui will react
    findSquare(); //Finding which square was clicked
    highlightSelected(); // Finding what is on the square that was just clicked
  }
  else if (mouseButton === CENTER) {
    moveUnits(); //If any units are selected they will move in the direction of the mouse
    checkForCombat(); //Checking to see if any units of opposite teams are on the same square and if so they fight
    checkForFlipCity(); //Checking to see if any units are on the city owned by the opposite team
  }
}

//Finding which square was clicked
function findSquare() {
  for (let i = 0; i < mapArray.length; i++) {
    if (mouseX > mapArray[i][0] && mouseX < mapArray[i][0] + TILESIZE && mouseY > mapArray[i][1] && mouseY < mapArray[i][1] + TILESIZE) {
      //let mapData = [(mapArray[i][0] - distX) / TILESIZE, (mapArray[i][1] - distY) / TILESIZE];
      let mapData = [mapArray[i][0], mapArray[i][1]];
      selectedSquare = mapData;
    }
  } 
}

//Finding what was on a square that was just clicked
function highlightSelected() {
  selectedUnits = [];
  selectedCities = [];
  chosenUnits = [];
  for (let i = 0; i < units.length; i++) {
    if (units[i].info()[0] === (selectedSquare[0] - distX) / TILESIZE && units[i].info()[1] === (selectedSquare[1] - distY) / TILESIZE && units[i].info()[7] === false) {
      //if (units[i].info()[2] === "blue") //uncomment to take control of only blue units
      selectedUnits.push(units[i]);
    }
  }
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].info()[0] === (selectedSquare[0] - distX) / TILESIZE && cities[i].info()[1] === (selectedSquare[1] - distY) / TILESIZE) {
      //if (cities[i].info()[2] === "blue") //uncomment to take control of only blue cities
      selectedCities.push(cities[i]);
    }
  }
  for (let i = 0; i < units.length; i++) {
    if (units[i].info()[7] === true) {
      //if (units[i].info()[2] === "blue") //uncomment to take control of only blue units
      chosenUnits.push(units[i]);
    }
  }
}

//Drawing the ui based off what is selected
function selectedUI() {
  let unitUIY = 0;
  for (let i = 0; i < chosenUnits.length; i++) {
    fill(0,255,0);
    rectMode(CORNER);
    rect(windowWidth - 250, unitUIY, 300, 50);
    fill(0);
    text("Movement: " + chosenUnits[i].info()[3] + "   Health: " + chosenUnits[i].info()[4], windowWidth - 220, unitUIY + 25);
    unitUIY += 50;
  }
  for (let i = 0; i < selectedUnits.length; i++) {
    fill(255);
    rectMode(CORNER);
    rect(windowWidth - 250, unitUIY, 300, 50);
    fill(0);
    text("Movement: " + selectedUnits[i].info()[3] + "   Health: " + selectedUnits[i].info()[4], windowWidth - 220, unitUIY + 25);
    unitUIY += 50;
  }
  for (let i = 0; i < selectedCities.length; i++) {
    fill(255);
    rectMode(CORNER);
    rect(windowWidth - 250, windowHeight - 175, 300, 50);
    fill(0);
    text("Produce Unit", windowWidth - 220, windowHeight - 175 + 25);
  }
  fill(255);
  rectMode(CORNER);
  rect(windowWidth - 125, windowHeight - 125, 125, 125);
  imageMode(CENTER);
  image(gearImg, windowWidth - 62.5, windowHeight - 62.5, 100, 100);
}

//Doing different things when the ui is pressed
function UIClicked() {
  let UIShift = 0;
  for (let i = 0; i < chosenUnits.length; i++) {
    UIShift += 50;
  }
  for (let i = 0; i < chosenUnits.length; i++) { 
    if (mouseX > windowWidth - 250 && mouseY > 50 * i && mouseY < 50 * i + 50) { //Checking or unchecking units
      chosenUnits[i].invertSelected();
    }
  }
  for (let i = 0; i < selectedUnits.length; i++) {
    if (mouseX > windowWidth - 250 && mouseY > 50 * i + UIShift && mouseY < 50 * i + 50 + UIShift) { //Checking or unchecking units
      selectedUnits[i].invertSelected();
    }
  }
  for (let i = 0; i < selectedCities.length; i++) {
    if (mouseX > windowWidth - 250 && mouseY > windowHeight - 175 && mouseY < windowHeight - 125) { //producing a units at a city
      selectedCities[i].produceUnit();
    }
  }
  if (mouseX >= windowWidth - 125 && mouseX < windowWidth && mouseY >= windowHeight - 125 && mouseY < windowHeight) { //ending the turn
    endTurn();
  }
}

//Moving chosen units in the direction of the mouse
function moveUnits() {
  let haveMovement = 0;
  for (let i = 0; i < chosenUnits.length; i++) {
    if (chosenUnits[i].info()[3] >= 5) {
      chosenUnits[i].move();
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

//Calling the endturn function from the objects
function endTurn() {
  enemyNPC();
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

//Checking to see if any units of opposite teams are on the same square and if so they fight
function checkForCombat() {
  let combatBlueTeam = [];
  let combatRedTeam = [];
  attackers = [];
  defenders = [];
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
  if (chosenUnits.length > 0 && chosenUnits[0].info()[2] === "blue") {
    for (let i = 0; i < combatBlueTeam.length; i++) {
      attackers.push(combatBlueTeam[i]);
    }
    for (let i = 0; i < combatRedTeam.length; i++) {
      defenders.push(combatRedTeam[i]);
    }
  }
  else if (chosenUnits.length > 0 && chosenUnits[0].info()[2] === "red") {
    for (let i = 0; i < combatRedTeam.length; i++) {
      attackers.push(combatRedTeam[i]);
    }
    for (let i = 0; i < combatBlueTeam.length; i++) {
      defenders.push(combatBlueTeam[i]);
    }
  }
  if (attackers.length > 0) {
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].info()[0] ===  combatBlueTeam[0].info()[0] && cities[i].info()[1] ===  combatBlueTeam[0].info()[1]) {
        cities[i].underAttack();
        cityUnderAttack.push(cities[i]);
      }
    }
    combat();
  }
}

//making opponents fight
function combat() {
  for (let i = 0; i < attackers.length; i++) {
    if (defenders.length > 0) {
      if (defenders[0].info()[4] > 0) {
        defenders[0].hurt();
      }
      else {
        defenders.splice(0, 1);
      }
    }
  }
  for (let i = 0; i < defenders.length; i++) {
    if (attackers.length > 0) {
      if (attackers[0].info()[4] > 0) {
        attackers[0].hurt();
      }
      else {
        attackers.splice(0, 1);
      }
    }
  }
  if (attackers.length > 0 && defenders.length > 0) {
    combat();
  }
  else {
    if (defenders.length > 0) {
      if (cityUnderAttack.length > 0) {
        if (cityUnderAttack[0].info()[2] !== attackers[0].info()[2]) {
          cityUnderAttack[0].swapTeams();
        }
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

//Checking to see if any units are on the city owned by the opposite team
function checkForFlipCity() {
  for (let i = 0; i < chosenUnits.length; i++) {
    for (let j = 0; j < cities.length; j++) {
      if (chosenUnits[i].info()[0] === cities[j].info()[0] && chosenUnits[i].info()[1] === cities[j].info()[1]) {
        if (chosenUnits[i].info()[2] !== cities[j].info()[2]) {
          cities[j].swapTeams();
        }
      }
    }
  }
}

//choosing between two npc playstyles
function chooseEnemyNPCPlayStyle() {
  let coinToss = random(100);
  if (coinToss > 50) {
    playStyle = "aggro"
  }
  else {
    playStyle = "passive"
  }
}

//making enemy units and cities behave according to the chosen playstyle
function enemyNPC() {
  if (playStyle === "aggro") {
    let redUnits = 0;
    let redCities
    for (let i = 0; i < units.length; i++) {
      if (units[i].info()[2] === "red") {
        for (let j = 0; j < units[i].info()[3]; j += 5) {
          if (units[i].info()[0] > 1) {
            units[i].manualMove(-1,0);
            checkForCombat();
            checkForFlipCity();
          }
        }
        redUnits += 1;
      }
    }
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].info()[2] === "red") {
        redCities += 1;
      }
    }
    if (redUnits * 5 < redCities - 1) {
      for (let i = 0; i < cities.length; i++) {
        if (cities[i].info()[2] === "red") {
          cities[i].produceUnit();
        }
      }
    }
  }
  else {
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].info()[2] === "red") {
        cities[i].produceUnit();
      }
    }
  }
}

//creaing an object that is used as a moving piece that can be used to fight and take control of cities for a team
class Unit {
  //creating the units stats, metastatus, and its visual appearence/position
  constructor(x_, y_, team_) {
    this.x = x_;
    this.y = y_;
    this.team = team_;
    this.size = 30; 
    this.movement = 30;
    this.health = 15;
    this.pay = 20;
    this.alive = true;
    this.selected = false;
  }

  //moving unit by a inputable number of squares in the x and y direction
  manualMove(x,y) {
    this.x += x;
    this.y += y;
  }

  //moving a unit if it have movement left and in the diretion of the mouse
  move() {
    if (mouseX > this.x * TILESIZE + distX + TILESIZE) {
      this.x += 1;
      this.movement -= 5;
    }
    if (mouseX < this.x * TILESIZE + distX) {
      this.x -= 1;
      this.movement -= 5;
    }
    if (mouseY > this.y * TILESIZE + distY + TILESIZE) {
      this.y += 1;
      this.movement -= 5;
    }
    if (mouseY < this.y * TILESIZE + distY) {
      this.y -= 1;
      this.movement -= 5;
    }
  }

  //displaying the unit as a circle with a colour that represents it's team and changes when it is chosen to be active
  display() {
    if (this.team === "blue") {
      if (this.selected === true) {
        fill(0,255,255);
      }
      else {
        fill(0,0,255);
      }
    }
    else {
      if (this.selected === true) {
        fill(255,255,0);
      }
      else {
        fill(255,0,0);
      }
    }
    ellipseMode(CENTER);
    ellipse(this.x * TILESIZE + TILESIZE / 2 + distX, this.y * TILESIZE + TILESIZE / 2 + distY, this.size, this.size);
  }

  //returning info about the unit
  info() {
    let unitInfo = [this.x, this.y, this.team, this.movement, this.health, this.pay, this.alive, this.selected];
    return unitInfo;
  }

  //getting a health bonus when defending a city
  defendCity() {
    this.health += 5;
  }

  //choosing or unchoosing a unit
  invertSelected() {
    if (this.selected === false) {
      this.selected = true;
    }
    else {
      this.selected = false;
    }
  }

  //regaining stats and paying the unit when a turn is over
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

  //called when getting hit in combat
  hurt() {
    this.health -= 3;
    if (this.health <= 0) {
      this.alive = false;
    }
  }
}

//creating an object that is used to produce units, make money, and help defend for a certain team
class City {
  //creating the cities stats and its visual appearence/position
  constructor(x_, y_, team_) {
    this.x = x_;
    this.y = y_;
    this.team = team_;
    this.size = 45;
    this.pay = 100;
    this.produced = 0;
  }

  //displaying the city as a rect coloured to fit its team
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

  //returning info about the city
  info() {
    let cityInfo = [this.x, this.y, this.team, this.pay];
    return cityInfo;
  }

  //changing the ownership of the city
  swapTeams() {
    if (this.team === "blue") {
      this.team = "red";
    }
    else {
      this.team = "blue";
    }
  }

  //resetting the produciton count and paying the team
  endTurn() {
    if (this.team === "blue") {
      teamBlueMoney += this.pay;
    }
    else {
      teamRedMoney += this.pay;
    }
    this.produced = 0;
  }

  //producing a unit that the pos of the city and making it the same team as the city
  produceUnit() {
    if (this.produced === 0) {
      units.push(new Unit(this.x, this.y, this.team));
      this.produced = 1;
    }
  }

  //giving friendly units in the city a health buff when underattack
  underAttack() {
    for (let i = 0; i < units.length; i++) { 
      if (units[i].info()[0] === this.x && units[i].info()[1] === this.y && units[i].info()[2] === this.team) {
        units[i].defendCity();
      }
    }
  }
}
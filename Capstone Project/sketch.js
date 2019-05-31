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

function setup() {
  createCanvas(MAPWIDTH, MAPHEIGHT);
  background(0);
  drawMap();
}

function draw() {
  moveMap();
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
  if (mouseX > windowWidth - 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= 5; 
      mapArray[i][1] -= 5;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX > windowWidth - 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= 5; 
      mapArray[i][1] += 5;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX < 50 && mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += 5; 
      mapArray[i][1] -= 5;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX < 50 && mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += 5; 
      mapArray[i][1] += 5;
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX > windowWidth - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] -= 5; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseX < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][0] += 5; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseY > windowHeight - 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] -= 5; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }

  else if (mouseY < 50) {
    for (let i = 0; i < mapArray.length; i++) {
      mapArray[i][1] += 5; 
      rect(mapArray[i][0], mapArray[i][1], TILESIZE, TILESIZE);
    }
  }
}
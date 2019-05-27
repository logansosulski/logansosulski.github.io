// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles = [];
let level = [[0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,1,1],
  [0,0,0,0,0],
  [0,1,0,2,0]];
let playerX = 4;
let playerY = 5;

const ROWS = 5;
const COLUMNS = 5;
const TILESIZE = 100;

function preload() {
  for(let i=0;i<3;i++) {
    tiles.push(loadImage("assets/"+i+".png"));
  }
}

function setup() {
  createCanvas(COLUMNS*TILESIZE, ROWS*TILESIZE);
}

function renderGame() {
  for(let y=0;y<ROWS;y++) {
    for(let x=0;x<COLUMNS;x++) {
      let index = level[y][x];
      image(tiles[index],x*TILESIZE,y*TILESIZE);
    }
  }
}

function swap(x1,y1,x2,y2) {
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (playerX > 1) {
      if (level[playerY][playerX-1] === 0) {
        swap(playerX,playerY,playerX-1,playerY);
        playerX--;
      }
      else if (level[playerY][playerX-1] === 0) {
        if (level[playerY][playerX-2] === 0) {
          swap(playerX-1,playerY,playerX-2,playerY);
          swap(playerX,playerY,playerX-1,playerY);
          playerX--;
        }
      }
    }
  }
}

function draw() {
  background(220);
  renderGame();
}

// CS30 - Final Programming Challenge
// Logan Sosulski
//
// 2019/06/19
// completed the extra for experts challenge
// 

//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.
let animationImages = [];   //array to hold all 8 images in each direction
let changeX = 0;
let changeY = 0;
let animationCycle = 8;
let direction = "right";
let foxSize = 100;
let pepsiToggle = -1;
let curX;
let curY;
let compFoxes = [];

//loading all animation frames
function preload(){
  loadAnimation();  //defined at bottom
}

//creating the canvas and pushing three foxes in the compfox array
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 3; i++) {
    compFoxes.push(new ComputerFox(random(500), random(500)));
  }
}

//calling foxes and computerfoxes so that the functions actually run
function draw() {
  background(255);
  drawFox();  
  computerFoxes();
}

//drawing the fox and calling all functions associated with it 
function drawFox() {
  markLocation();
  moveFox();
  findDirection();
  cycleAnimation();
  noTint();
  pepsiMode();
  image(animationImages[animationCycle], width/2 + changeX, height/2 + changeY, foxSize, foxSize); 
}

//moving the fox using wasd
function moveFox() {
  if (keyIsDown(87)) {
    changeY -= 5;
  }
  else if (keyIsDown(65)) {
    changeX -= 5;
  }
  else if (keyIsDown(83)) {
    changeY += 5;
  }
  else if (keyIsDown(68)) {
    changeX += 5;
  }
}

//cycling through the images based on the foxe's direction
function cycleAnimation() {
  if (frameCount % 4 === 0) {
    animationCycle++;
  }
  if (direction === "up") {
    if (animationCycle > 23) {
      animationCycle = 16;
    }
  }
  else if (direction === "left") {
    if (animationCycle > 7) {
      animationCycle = 0;
    }
  }
  else if (direction === "down") {
    if (animationCycle > 31) {
      animationCycle = 24;
    }
  }
  else if (direction === "right") {
    if (animationCycle > 15) {
      animationCycle = 8;
    }
  }
}

//marking the x and y of the fox
function markLocation() {
  curX = width/2 + changeX;
  curY = height/2 + changeY;
}

//using the marked x and y to decide what direction the fox is moving
function findDirection() {
  if (curX > width/2 + changeX) {
    direction = "left";
  }
  else if (curX < width/2 + changeX) {
    direction = "right";
  }
  else if (curY > height/2 + changeY) {
    direction = "up";
  }
  else if (curY < height/2 + changeY) {
    direction = "down";
  }
}

//whats the fox move randomly and change size/colour 
function pepsiMode() {
  if (pepsiToggle > 0) {
    changeX += random(-10, 10);
    changeY += random(-10, 10);
    foxSize += random(-5, 5);
    tint(random(255), 0, random(255));
  }
  else {
    noTint();
  }
}

//calling all the compfox functions
function computerFoxes() {
  for (let i = 0; i < compFoxes.length; i++) {
    compFoxes[i].chooseDirection();
    compFoxes[i].move();
    compFoxes[i].howCloseToPlayer();
    compFoxes[i].display();
  }
}

//changing the animation pciture, toggling pepsi mode, or reseeting the player fox based on what key is presed
function keyPressed() {
  if (key === "w") {
    animationCycle = 16;
  }
  else if (key === "a") {
    animationCycle = 0;
  }
  else if (key === "s") {
    animationCycle = 24;
  }
  else if (key === "d") {
    animationCycle = 8;
  }
  if (key === "p") {
    pepsiToggle *= -1;
  }
  if (key === "r") {
    pepsiToggle = -1;
    changeX = 0;
    changeY = 0;
    foxSize = 100;
  }
}

//changing the fox size based on with the screen is clicked
function mouseClicked() {
  if (mouseY > height / 2) {
    if (foxSize > 10) {
      foxSize -= 5;
    }
  }
  else {
    foxSize += 5;
  }
}

//creating an array with all the animation frames in it
function loadAnimation(){
  for(let i = 1; i <= 8; i++){    //0-7 LEFT
    animationImages.push(loadImage("/assets/left" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //8-15 RIGHT
    animationImages.push(loadImage("/assets/right" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //16-23 UP
    animationImages.push(loadImage("/assets/up" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //24-31 DOWN
    animationImages.push(loadImage("/assets/down" + i + ".png"));
  }
}

//creating a compfox class
class ComputerFox {
  constructor(x_, y_) { //creating all compfox variables
    this.x = x_;
    this.y = y_;
    this.compDirection = "right";
    this.compCurX;
    this.compCurY;
    this.image = 8;
  }

  //choosing a ranbdom diretion for the fox every 20 frames and setting the image based on that directionb
  chooseDirection() {
    if (frameCount % 20 === 0) {
      let randomDirection = round(random(100));
      if (randomDirection > 75) {
        this.direction = "right";
        this.image = 8;
      }
      else if (randomDirection < 75 && randomDirection > 50) {
        this.direction = "down";
        this.image = 24;
      }
      else if (randomDirection < 50 && randomDirection > 25) {
        this.direction = "left";
        this.image = 0;
      }
      else {
        this.direction = "up";
        this.image = 16;
      }
    }
  }

  //displaying a compfox at an x y location with a specific image based on the direction the fox is moving
  display() {
    image(animationImages[this.image], this.x, this.y);
  }

  //moving the comp based on the fox direction
  move() {
    if (this.direction === "up") {
      this.y -= 5;
    }
    else if (this.direction === "left") {
      this.x -= 5;
    }
    else if (this.direction === "down") {
      this.y += 5;
    }
    else {
      this.x += 5;
    }
  }

  //determining how close the fox is to player and tinting it blue if it gets to close
  howCloseToPlayer() {
    let differenceX = abs(width/2 + changeX - this.x);
    let differenceY = abs(height/2 + changeY - this.y);
    let distAway = sq(differenceX) + sq(differenceY);
    distAway = sqrt(distAway);
    if (distAway <= 200) {
      tint(0,0,255);
    }
    else {
      noTint();
    }
  }
}
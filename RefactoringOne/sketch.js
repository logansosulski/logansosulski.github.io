//Initlizing the variables
let rectX;
let rectY;
let xAngle;
let yAngle;

//Declaring Variables and creating canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectX=200; 
  rectY=300; 
  xAngle=random(3,8); 
  yAngle=random(3,8);
}

//Drawing the background, drawing the box, 
//and calling the functions
function draw() {
  background(80);
  bouncingBox();
  rect(rectX,rectY,250,75);
}

//Changing the box x and y to creating a bouncing effect
function bouncingBox(){
  rectX+=xAngle; 
  rectY+=yAngle;
  if (rectX>=width-250||rectX<=0){
    xAngle=xAngle*-1;
  }
  if (rectY>=height-75||rectY<=0){
    yAngle=yAngle*-1;
  }
}
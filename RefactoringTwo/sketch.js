//Creating the canvas at a set size
function setup() {
  createCanvas(480, 270);
}

function draw() {
  //Drawing the background
  background(255);
  stroke(0);
  //setting up quadrents
  line(240, 0, 240, 270);
  line(0, 135, 480, 135);
  noStroke();
  fill(0);
  //Drawing a rectangle in one of four quadrents
  //depending on the mouseX and mouseY
  if (mouseX < 240 && mouseY < 135) {
    rect(0,0,240,135);
  }

  else if (mouseX > 240 && mouseY < 135) {
    rect(240,0,240,135);
  }

  else if (mouseX < 240 && mouseY > 135) {
    rect(0,135,240,135);
  }

  else {
    rect(240,135,240,135);
  }
}
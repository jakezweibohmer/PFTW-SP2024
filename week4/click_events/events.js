const squareWidth = 50;
const squareHeight = 50;
let squareXPosition = 100;
let squareYPosition = 0;

const myColors = ["red", "blue", "green", "teal", "cyan", "yellow"];
let colorIndex = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  fill(myColors[colorIndex]);
  noStroke();
  /*   ellipse(100, 100, 100); */
  rect(squareXPosition, squareYPosition, squareWidth, squareHeight);
  squareYPosition += 1;
  if (squareYPosition > height) {
    // repeats
    // squareYPosition = 0;
    // stops
    noLoop();
  }
}

function mousePressed() {
  console.log(mouseX, mouseY);

  /*   // for a circle

  const distance = dist(mouseX, mouseY, 100, 100);
  console.log(distance);
  if(distance < 50) {
    alert('you hit it');
  } */

  // rectangle hit testing

  if (
    mouseX >= squareXPosition &&
    mouseX <= squareXPosition + squareWidth &&
    mouseY >= squareYPosition &&
    mouseY <= squareYPosition + squareHeight
  ) {
    console.log("you hit the x");
    if (colorIndex < myColors.length - 1) {
      colorIndex++;
    } else {
      colorIndex = 0;
    }
  }
}

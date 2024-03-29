// mouse pressed  function
const circleDiameter = 100;
// let circleX = 200;
// let circleY = 300;
let startingX = 200;
let startingY = 200;
let myCircles = [];
let startingId = 0;

function setup() {
  createCanvas(850, 1000);
  background(60, 181, 195);
  // ellipse(circleX, circleY, circleDiameter);
  for (let k = 0; k < 5; k++) {
    for (let i = 0; i < 4; i++) {
      ellipse(startingX, startingY, circleDiameter);
      myCircles.push({ x: startingX, y: startingY, id: startingId });
      startingX += 150;
      startingId++;
    }
    startingY += 150;
    startingX = 200;
  }

  console.log(myCircles);
}

function mousePressed() {
  for (let j = 0; j < myCircles.length; j++) {
    let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
    if (distance < circleDiameter / 2) {
      console.log("The circle has been clicked", myCircles[j].id);
    }
  }
}

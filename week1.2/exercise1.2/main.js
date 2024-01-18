function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  }

  function draw() {
  if (mouseIsPressed) {
    fill(0, 255, 246, 230)
  } else {
    noFill();
  }
  ellipse(mouseX, mouseY, 200, 200);
  }

const brush = window.prompt("What size brush would you like to use?");
console.log("Brush size " + brush);
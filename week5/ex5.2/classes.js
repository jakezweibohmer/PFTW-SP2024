let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 4; i++) {
    bubbles.push(new Bubble(200, 150));
  }
}

function draw() {
  background(254, 0, 96);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(83, 2, 32);
    strokeWeight(4);
    noFill();
    rect(this.x, this.y, 50, 50);
  }
}

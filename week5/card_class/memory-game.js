const DOWN = "down";
const UP = "up";
let startingX = 100;
let startingY = 200;
let cards = [];
const gameState = {};

let cardback;
function preload() {
  cardback = loadImage("images/tile_backs.png");
}

function setup() {
  createCanvas(650, 1000);
  background(0);
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 4; i++) {
      cards.push(new Card(startingX, startingY));
      startingX += 130;
    }
    startingY += 150;
    startingX = 100;
  }
}

function mousePressed() {
  /*   loop for card flips */
  for (let k = 0; k < cards.length; k++) {
    if (cards[k].didHit(mouseX, mouseY)) {
      console.log("flipped");
    }
  }
}

class Card {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.face = "down";
    this.show();
  }
  show() {
    if (this.face === DOWN) {
      fill("rgb(57.7%, 9.9%, 9.9%)");
      /* I rounded the rectangle 100% to create a circle */
      rect(this.x, this.y, this.width, this.height, 100);
      /* placing images on backs */
      image(cardback, this.x, this.y, this.width, this.height);
    } else {
      fill("#aaa");
      rect(this.x, this.y, this.width, this.height, 10);
    }
  }

  didHit(mouseX, mouseY) {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }
  flip() {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}

const DOWN = "down";
const UP = "up";
let startingX = 100;
let startingY = 200;
let cards = [];
const gameState = {};

let cardfaceArray = [];
let cardback;
function preload() {
  cardback = loadImage("images/tile_backs.png");
  cardfaceArray = [
    loadImage("images/bank.png"),
    loadImage("images/basket.png"),
    loadImage("images/brain.png"),
    loadImage("images/education.png"),
    loadImage("images/hand_press.png"),
    loadImage("images/location_icon.png"),
    loadImage("images/luggage.png"),
    loadImage("images/megaphone.png"),
    loadImage("images/pencil.png"),
    loadImage("images/rocket.png"),
  ];
}

function setup() {
  createCanvas(700, 920);
  background(0);
  let selectedFaces = [];
  for (let z = 0; z < 10; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove the used cardface sos it doesn't get randomly selected again
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 4; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 130;
    }
    startingY += 130;
    startingX = 100;
  }
}

function mousePressed() {
  /*   loop for card flips */
  for (let k = 0; k < cards.length; k++) {
    if (cards[k].didHit(mouseX, mouseY)) {
      console.log("flipped", cards[k]);
    }
  }
}

class Card {
  constructor(x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 110;
    this.height = 110;
    this.face = "down";
    this.cardFaceImg = cardFaceImg;
    this.show();
  }
  show() {
    if (this.face === DOWN) {
      fill("rgb(57.7%, 9.9%, 9.9%)");
      /* rounded the rectangle 100% to create a circle */
      rect(this.x, this.y, this.width, this.height, 100);
      /* placing images on backs */
      image(cardback, this.x, this.y, this.width, this.height);
    } else {
      fill("#aaa");
      /* rounded the rectangle 100% to create a circle */
      rect(this.x, this.y, this.width, this.height, 100);
      image(this.cardFaceImg, this.x, this.y, this.width, this.height);
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

function shuffleArray(array) {
  let counter = array.length;
  while (counter > 0) {
    // pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}

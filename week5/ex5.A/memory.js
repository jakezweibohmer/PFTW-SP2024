const DOWN = "down";
const UP = "up";
let backgroundImage;
let startingX = 100;
let startingY = 210;
const cards = [];
const gameState = {
  totalPairs: 10,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false,
};
let cardfaceArray = [];
let cardback;

function preload() {
  backgroundImage = loadImage("images/wood_background.jpg");
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
  let selectedFaces = [];
  for (let z = 0; z < 10; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove the used cardface so it doesn't get randomly selected again
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

function draw() {
  image(backgroundImage, 0, 0, width, height);
  // background(43, 131, 138);
  // title for game
  fill(167, 299, 255);
  textFont("bodoni", 24);
  text("JAKE'S SUPER MATCHING MEMORY GAME", 110, 75);
  if (gameState.numMatched === gameState.totalPairs) {
    fill("yellow");
    textSize(50);
    text("YOU WIN!", 360, 170);
    noLoop();
  }
  for (let k = 0; k < cards.length; k++) {
    if (!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
  }

  // scoreboard
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  // fill(218, 203, 251);
  // textSize(50);
  // Modify the font and colors
  fill(218, 203, 251);
  textFont("bodoni", 30);
  text("Attempts: " + gameState.attempts, 110, 120);
  fill(171, 231, 236);
  textFont("bodoni", 45);
  text("Matches: " + gameState.numMatched, 110, 170);
}

function mousePressed() {
  if (gameState.waiting) {
    return;
  }
  /*   loop for card flips */
  for (let k = 0; k < cards.length; k++) {
    // first check flipped cards length, and then we can trigger the flip
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log("flipped", cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (
      gameState.flippedCards[0].cardFaceImg ===
      gameState.flippedCards[1].cardFaceImg
    ) {
      // situation where cards match
      // mark cards as matched so they don't flip back
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // empty the flipped cards array
      gameState.flippedCards.length = 0;
      // increment the score
      gameState.numMatched++;
      loop();
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 1000);
    }
  }
}

class Card {
  constructor(x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 120;
    this.height = 120;
    this.face = "down";
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }

  show() {
    if (this.face === UP || this.isMatch) {
      fill("fff");
      /* rounded the rectangle 100% to create a circle */
      rect(this.x, this.y, this.width, this.height, 100);
      /* placing images on faces */
      image(this.cardFaceImg, this.x, this.y, this.width, this.height);
    } else {
      fill("rgb(171, 231, 236)");
      noStroke();
      /* rounded the rectangle 100% to create a circle */
      rect(this.x, this.y, this.width, this.height, 100);
      /* placing images on backs */
      image(cardback, this.x, this.y, this.width, this.height);
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

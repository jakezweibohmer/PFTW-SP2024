function setup() {
  createCanvas(800, 600);
  background(0);
  let myCard = new Card();
}

class Card {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.width = 80;
    this.height = 100;
    this.show();
  }
  show() {
    fill("rgb(57.7%, 9.9%, 9.9%)");
    rect(this.x, this.y, this.width, this.height, 10);
  }
}

// timers
// timeout - one time timer. timed in milliseconds
// function alertuser(name) {
//   window.alert("Surprise " + name + ", the timer is up!");
// }
// window.setTimeout(alertuser, 5000, "Jake");

// interval
// window.setInterval(function () {
//     console.log(new Date()) {
//     }, 2000)

//     const myButton  = document.getElementById('cancelInterval');
//     myButton.addEventListener('Click', () => {
//         console.log('clearing interval');
//         window.clearInterval(myInterval);
//     })

// OOP - Object Oriented Programming
// Classes are capitalized

// class Car {
//   // constructor is an initializing function
//   constructor(color, tires) {
//     console.log("I've been constructed");
//     this.color = color;
//     this.tires = tires;
//   }
//   color = "red";
//   tires = 4;
// }
// const myCar = new Car("red", "3");
// const myOtherCar = new Car("blue", "6");
// console.log(myCar, myOtherCar);

class Rectangle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = 50;
    this.height = 100;
    this.hit = false;
  }
  show() {
    if (this.hit) {
      fill("red");
      rect(this.x, this.y, this.width, this.height);
    } else {
      fill(this.color);
      rect(this.x, this.y, this.width, this.height);
    }
  }
  clicked() {
    this.hit = !this.hit;
    this.show();
  }
}

let startX = 150;
let startY = 150;
let rectArr = [];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 4; j++) {
    rectArr.push(new Rectangle(startX, startY, "blue"));
    startX += 150;
  }
  startX = 150;
  startY += 150;
}
console.log(rectArr);

function setup() {
  createCanvas(800, 600);
  background("#999999");
}
function draw() {
  for (let k = 0; k < rectArr.length; k++) {
    rectArr[k].show();
  }
}
function mousePressed() {
  for (let l = 0; l < rectArr.length; l++) {
    if (
      mouseX > rectArr[l].x &&
      mouseX < rectArr[l].x + rectArr[l].width &&
      mouseY > rectArr[l].y &&
      mouseY < rectArr[l].y + rectArr[l].height
    ) {
      console.log("you hit", rectArr[l]);
      rectArr[l].clicked();
      window.setTimeout(() => {
        rectArr[l].clicked();
      }, 2000);
    }
  }
}

// use circle class
//   const myCircle = new Circle(150, 300, "red");
//   myCircle.show();
// loop
//   for (let i = 0; i < arrayOfCircles.length; i++) {
//     const newCircle = new Circle(i * 150 + 100, 200, "red");
//     newCircle.show();
//   }

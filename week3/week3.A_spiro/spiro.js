let angle = 0;
let rotateBy = 5;

function setup () {
  createCanvas(800, 800);
  background(0);
  angleMode(DEGREES);
}

function makeArm(rotateBy) {
  let alt = Math.round(rotateBy / 360);
  console.log(alt);
  noFill();
  stroke(0, 0, 255);
  strokeWeight(1);
  ellipse(200, 200 + alt, 200 / alt);
  stroke(0, 255, 0);
  bezier(alt - 30, alt + 10, 10, 10, 250, 100, 90, 80);
  noFill();
  stroke(255, 0, 0);
  strokeWeight(1);
  ellipse(150, 150 + alt, 200 / alt);
}

function draw () {
  translate(400, 400);
  rotate(rotateBy);
  makeArm(rotateBy);
  rotateBy += 2; // does the duplicate, repeat, rotate for spiro
}

function mousePressed() {
  noLoop();
}
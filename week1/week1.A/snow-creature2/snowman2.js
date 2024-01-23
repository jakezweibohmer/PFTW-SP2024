let grid = undefined;
let stroke1 = prompt("Enter a basic color name in lower case letters", "gray");
let stroke2 = prompt("Enter another basic color in lowercase", "green");
let fill1 = prompt("Enter a hat color in lowercase", "green");


function setup () {
  createCanvas(1000, 1000);
  background(9, 158, 156);
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  // background(grid);
  // background hill
  ellipse(500, 1600, 2000);
  // snowman shadow
  fill("gray");
  ellipse(500, 850, 500, 80);
  // snowman legs
  fill("#fff");
  strokeWeight(20);
  stroke(stroke1);
  // left leg
  ellipse(400, 800, 100);
  // right leg
  ellipse(600, 800, 100);
  // body
  ellipse(500, 600, 400, 400);
  // head
  ellipse(500, 350, 200);
  // left arm
  ellipse(300, 550, 100);
  // right arm
  ellipse(700, 550, 100);
  // hat brim
  stroke(stroke2);
  strokeWeight(40);
  line(400, 270, 600, 270);
  // hat body
  fill(fill1);
  strokeJoin(ROUND);
  quad(450, 150, 550, 150, 550, 270, 450, 270);
  // hat band
  stroke(0);
  strokeCap(SQUARE);
  line(430, 230, 570, 230);
  // eyes
  stroke(0);
  strokeWeight(50);
  point(450, 350);
  point(550, 350);
  // eyes highlights
  stroke("fff");
  strokeWeight(20);
  point(450, 360);
  point(550, 360);
  // mouth
  noFill();
  stroke(0);
  strokeWeight(10);
  strokeCap(ROUND);
  arc(500, 350, 80, 80, 45, HALF_PI);
  // buttons
  stroke(0);
  strokeWeight(20);
  point(500, 550);
  point(500, 590);
  point(500, 625);
  // friend
  fill("#fff");
  strokeWeight(20);
  stroke(stroke1);
  ellipse(0, 920, 300);
  // snow left
  stroke("fff");
  strokeWeight(30);
  point(100, 100);
  point(300, 70);
  point(200, 250);
  point(150, 300);
  point(130, 500);
  // snow right
  stroke("fff");
  strokeWeight(30);
  point(900, 70);
  point(800, 200);
  point(850, 300);
  point(870, 550);
}
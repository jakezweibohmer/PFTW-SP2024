let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case letters", "gray");
let stroke2 = prompt("enter another basic color in lowercase", "purple");
let fill1 = prompt("enter a hat color in lowercase", "purple");


function setup () {
  createCanvas(1000, 1000);
  background(9, 158, 156);
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  // background(grid);
  // snowman legs
  fill("#f1f1f1");
  strokeWeight(20);
  stroke(stroke1);
  // left leg
  ellipse(350, 800, 200);
  // right leg
  ellipse(650, 800, 200);
  // body
  ellipse(500, 600, 350, 400);
  // head
  ellipse(500, 350, 200);
  // hat brim
  stroke(stroke2);
  strokeWeight(40);
  line(400, 270, 600, 270);
  // hat body
  fill(fill1);
  quad(450, 150, 550, 150, 550, 270, 450, 270);
  // eyes
  stroke(0);
  strokeWeight(50);
  point(425, 350);
  point(575, 350);
  // mouth
  noFill();
  strokeWeight(10);
  arc(500, 350, 80, 80, 0, HALF_PI);
}
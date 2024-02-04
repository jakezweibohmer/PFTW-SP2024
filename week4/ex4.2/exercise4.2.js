let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;

// overall canvas
function setup () {
  createCanvas(500, 500);
  rectY = random(height - rectHeight);
  speed = random(1, 3);
}

// style and motion for game
function draw () {
  background(255, 0, 0);
  drawShape();
  rectX += speed;
  if(rectX > width) {
    // stop rectangle from repeating move
    noLoop();
    // return message at end of run
    text('Your score was ' + clickCount, 200, 250);
}
}
// game play interactivity
function mousePressed () {
  if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
    clickCount++;
    console.log('hit');
}
}
// style of rectangle
function drawShape () {
  fill('yellow');
  noStroke();
  rect(rectX, rectY, rectWidth, rectHeight);
}
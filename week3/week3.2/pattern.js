function setup () {
  createCanvas(200, 200);
}

function createTile () {
  translate(0, 0);
  fill(134, 222, 8);
  rect(0, 0, 200, 200);

  // diagonal strokes
  stroke(205, 240, 184);
  strokeWeight(5);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);

  // vert and hor strokes
  stroke(205, 240, 184);
  strokeWeight(3);
  line(100, 0, 100, 200);
  line(0, 100, 200, 100);
  
  // outlined circles
  noFill();
  stroke(62, 134, 19);
  strokeWeight(5);
  circle(100, 100, 100);
  noFill();
  stroke(62, 134, 19);
  strokeWeight(3);
  circle(100, 100, 170);
  circle(100, 100, 180);
  
  // big circles
  noStroke();
  fill(190, 239, 70);
  circle(100, 50, 50);
  circle(50, 100, 50);
  circle(150, 100, 50);
  circle(100, 150, 50);
  circle(100, 100, 25);
  
  // small circles
  noStroke();
  fill(202, 220, 30);
  circle(100, 50, 25);
  circle(50, 100, 25);
  circle(150, 100, 25);
  circle(100, 150, 25);
  circle(100, 100, 15);

}

function draw () {
    createTile();
}
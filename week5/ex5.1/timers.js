let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 10;
const distance = 2;

function setup() {
  createCanvas(500, 500);
  background(254, 0, 108);
  drawBlock(blockX, blockY, 255);
}

function drawBlock(x, y, color) {
  // lowered opacity for smoother transition
  fill(color || 254, 195, 0, 20);
  strokeWeight(0);
  rect(x, y, 50, 50);
}

function keyTyped() {
  // both keyTped and keyPressed seemed to work for me
  let keyToNumber = Number(key);
  if (isNaN(keyToNumber)) {
    return;
  }
  keyToNumber = map(keyToNumber, 1, 9, 1, 255);
  console.log("converted number", keyToNumber);
  blockColor = keyToNumber;
}
window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
      drawBlock(blockX, blockY, blockColor);
      blockY += distance;
    } else {
      blockY = 0;
      blockX += 50;
    }
    if (blockY - 10 > height && blockX - 10 > width) {
      // cancels timer
      window.clearInterval(drawTimer);
      alert("What a masterpiece! Great job!");
    }
  }, speed);
}, 1500);

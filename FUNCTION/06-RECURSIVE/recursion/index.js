function setup() {
  createCanvas(1200, 1000);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(600, 300, 500);
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 10) {
    drawCircle(x + d * 0.5, y, d * 0.5);
    drawCircle(x - d * 0.5, y, d * 0.5);
    drawCircle(x, y + d * 0.5, d * 0.5);
  }
}

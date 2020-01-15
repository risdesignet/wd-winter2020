function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(200, 10, 70);
  // fill(0);
  noStroke();
  ellipse(100, 100, 80, 80);

  stroke(255, 200, 100);
  ellipse(mouseX, mouseY, 80, 80);
  fill(0,0,20);
  triangle(30, 75, mouseX, 20, 86, 75);
}

//Static Sketch
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(209, 241, 255);
  for (let i = 0; i < 200; i++) {
    fill(i*3, i*6, i*10);
    bezier(windowHeight + i*100, i*100 - 5, i*700, 0, -1500, -1580, 80, windowHeight + 900);
  }
}

//https://p5js.org/reference/#/p5/windowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
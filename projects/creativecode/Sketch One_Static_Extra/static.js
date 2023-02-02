function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(124, 65, 245);
  //let m = random(6);
  for (let i = 0; i < 150; i++) {
    if ((i % 5) == 0) {
    fill(255 - 4*i, 20 + 2*i, 255);
    stroke(0,0,0);
    bezier(windowHeight + i*40, i*2 - 5, i*400, 0, -1500, -1380, 0, windowHeight + 1500);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
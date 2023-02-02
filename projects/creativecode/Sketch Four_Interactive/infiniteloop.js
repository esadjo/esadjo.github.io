//Interactive Sketch
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(209, 241, 255);
  for (let i = 0; i < 20; i++) {
    //fill(i*5, i*20, i*40)
    //fill(115 - (2*i), 191 - (8*i), 184 - i);
    //fill(115 - (mouseX*30), 191 - (8*i), 184 - i);
    stroke(100 - (mouseX/3), 91 - (8*i), 150 - 2*(mouseY/100));
    strokeWeight(1+ mouseX/400);
    fill(200 - (mouseX/3), 191 - (8*i), 250 - 2*(mouseY/100));
    bezier(mouseY + i*3000, 0 + i*10, mouseX - 4000, mouseY - 1000, 0, 400, 1000, windowHeight + 1000);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
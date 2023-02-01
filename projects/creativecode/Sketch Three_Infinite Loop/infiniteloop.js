//Infinite Loop Sketch
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 54, 253);
  //let m = random(6);
  for (let i = 0; i < 150; i++) {
    rotate(frameCount / 7000.0);
    if ((i % 2) == 0) {
      //rotate(frameCount / 700.0);
      fill(255 - 4*i/1.5, 20 + 2*i/1.5, 240);
      bezier(windowHeight + i*40, i*2 - 5, i*400, 0, -1500, -2080, 800, windowHeight + 900);
    }
  }
}
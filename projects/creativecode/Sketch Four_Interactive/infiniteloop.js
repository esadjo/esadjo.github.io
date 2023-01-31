function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(209, 241, 255);
  for (let i = 0; i < 60; i++) {
    //fill(i*5, i*20, i*40)
    //fill(115 - (2*i), 191 - (8*i), 184 - i);
    //fill(115 - (mouseX*30), 191 - (8*i), 184 - i);
    stroke(100 + (windowWidth/3), 91 - (8*i), 150 + 2*(windowHeight/100));
    strokeWeight(1+ windowWidth/400*i);
    fill(200 - (windowWidth/3), 191 - (8*i), 250 - 2*(windowWidth/100));
    bezier(windowHeight + i*5000, 0 + i*10, 4000, 1000, 0, 0, 0, 0);
  }
} 


/*//Static Sketch
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(209, 241, 255);
  //let m = random(6);
  for (let i = 0; i < 150; i++) {
    if ((i % 5) == 0) {
    fill(255 - 8*i, 20 + 2*i, 255);
    bezier(windowHeight + i*40, i*2 - 5, i*400, 0, -1500, -280, 80, windowHeight + 900);
    }
  }
}*/
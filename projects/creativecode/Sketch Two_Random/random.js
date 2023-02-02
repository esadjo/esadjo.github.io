//Random Sketch
// !!!!!!To do -- adjust position of different elements based on window size
let m;
let num;
let back;
let pos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  m = random(6);
  num = random(3);
  back = random(200, 255)
  pos = random(0, 100)
  
}



function draw() {
  background(50 + back , back - 100, 100);
  //for (let i = 0; i < 150; i++) {
    //num = random(3); // 0, 1, 2
    print(num);
    // If one argument is given and it is a number, returns a random number from 0 up to (but not including) the number.
    // https://p5js.org/reference/#/p5/random
    let type;
    for (let i = 0; i < 150; i++) {
      if (num < 1) {
        type = CHORD;

      } else if (num < 2) {
        type = PIE; 
      } else {
        type = OPEN;
      }
      print(type);
      fill(215 / m / 2, 3*m, m*40);
      // how to create arcs: https://p5js.org/reference/#/p5/arc
      arc(pos + windowWidth/50, pos + 700, 100 - pos, 100 - pos, pos, PI + QUARTER_PI, type);
      arc(windowWidth/5 + 800-pos, 500 - pos, 100 - pos, 100 - pos, pos/8, PI + QUARTER_PI, type);
      //fill(0, 0, 0);
      arc(windowWidth/3 - pos*6, 500 - pos, 100 - pos, 100 - pos, pos/9, PI + QUARTER_PI, type);
      arc(windowWidth, 800, 200 - pos, 200 - pos, 0, PI + QUARTER_PI, CHORD);
      //fill(0, 0, 0);
      arc(pos + windowWidth - 500, pos + 800, 100 - pos, 100 - pos, pos/10, PI + QUARTER_PI, type);
      
      
      fill(255/ m, m*10, m*31);
      arc(windowWidth/6 + 500 - pos, 500 - pos, 300 - pos, 300 - pos, pos/80, PI + QUARTER_PI, type);
      arc(windowWidth/3 + 850 - (pos/10), 100-(pos/10), 500 - pos, 500 - pos, pos/10, PI + QUARTER_PI, type);
      
      arc(windowWidth/10 + pos*2, 2*pos + 100, 150 - pos, 150 - pos, pos/5, PI + QUARTER_PI, type);
      arc(windowWidth/4 + 9*pos, 800 - pos, 150 - pos, 150 - pos, pos/9, PI + QUARTER_PI, type);
      
      arc(400 - windowWidth/4, 400, 100, 100, pos/10, PI + QUARTER_PI, CHORD);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
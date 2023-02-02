// CHECK THAT THIS COUNTS FOR SKETCH 5!! (AUDIO)
var canvas = document.getElementById('canvas');
// https://p5js.org/examples/sound-load-and-play-sound.html
let song;
let player;

function setup() {
  song = loadSound('./audio/Clair_De_Lune_-_Aurbanni.mp3');
  createCanvas(windowWidth, windowHeight);
  background(0, 8, 20);
  noStroke();
  fill(178, 197, 214); //fill(73, 101, 128);
  player = circle(windowWidth/2, windowHeight/2, 200);

  fill(0, 8, 20);
  triangle(windowWidth/2 - 30, windowHeight/2 + 40, windowWidth/2 - 30, windowHeight/2 - 40, windowWidth/2 + 40, windowHeight/2 - 0);
       
  //triangle(windowWidth/2 - 30, windowHeight/2 + 40, windowWidth/2 - 30, windowHeight/2 - 40, windowWidth/2 + 40, windowHeight/2 - 0);
  //player.mouseOver(cursor);
  //circle(windowWidth/2 + 50, windowHeight/2 + 50, 0.5);
  //circle(windowWidth/2 - 50, windowHeight/2 - 50, 0.5);
  //circle(windowWidth/2 - 40, windowHeight/2 + 40, 0.5);
  //circle(windowWidth/2 + 50, windowHeight/2 - 50, 0.5);
}

function mousePressed() {
    if ((mouseX <= (windowWidth/2 + 50)) && (mouseX => (windowWidth/2 - 50)) && (mouseY <= (windowHeight/2 + 50)) && (mouseY => (windowHeight/2 - 50))) {
      if (song.isPlaying()) {
        //fill(255, 255, 255);
        //rect(windowWidth/2 - 50, windowHeight/2 - 50, 100, 100);
        background(0, 8, 20);
        fill(178, 197, 214);
        circle(windowWidth/2, windowHeight/2, 200);
        
        fill(0, 8, 20);
        triangle(windowWidth/2 - 30, windowHeight/2 + 40, windowWidth/2 - 30, windowHeight/2 - 40, windowWidth/2 + 40, windowHeight/2 - 0);
        // .isPlaying() returns a boolean
        song.stop();
      // background(255, 0, 200);
      } else {
        song.play();

        background(0, 29, 61);

        /*fill(0, 53, 102);
        circle(windowWidth/4, windowHeight/4, 250);

        fill(0, 53, 102);
        circle(windowWidth/4 + 800, windowHeight/4 + 200, 250);*/
        
        fill(255, 214, 10, 35);
        circle(windowWidth/2, windowHeight/2, 300);

        fill(255, 195, 0);
        circle(windowWidth/2, windowHeight/2, 200);

        
        
        fill(0, 29, 61);
        rect(windowWidth/2 - 35, windowHeight/2 - 40, 20, 90);
        rect(windowWidth/2 + 15, windowHeight/2 - 40, 20, 90);
        //rectangle(windowWidth/2 - 10, windowHeight/2 - 10, 200, 200);
        //background(114, 61, 70);
      }
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

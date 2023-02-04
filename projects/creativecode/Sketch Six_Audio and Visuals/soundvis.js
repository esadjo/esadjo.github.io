// CHECK THAT THIS COUNTS FOR SKETCH 5!! (AUDIO)
var canvas = document.getElementById('canvas');
// https://p5js.org/examples/sound-load-and-play-sound.html
let song;
let player;

function preload() {
  //song = loadSound('./audio/Clair_De_Lune_-_Aurbanni.mp3');
  song = loadSound('./audio/Gymnopedie_1_Erik_Satie_-_Abydos_Musique.mp3');
}

function setup() {
  //song.play();
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);

}


//https://p5js.org/reference/#/p5/noise
let size;

function draw() {
  //background(255, 255, 255);
  background(222, 231, 249);

  fill(184, 203, 238);
  circle(windowWidth/4, windowHeight/4, 50);
  circle(windowWidth/7, windowHeight/4*3, 200);
  circle(windowWidth, windowHeight, 700);
  circle(windowWidth/7*6, windowHeight/4, 250);
  circle(0, 0, 700);

  //let n = noise(xoff) * width;
  let n = mouseY;
  //line(0, n, windowWidth, n);
  noStroke();

  fill(-mouseY/2 + 50, 100 - 4*mouseY, -mouseY/8 + 250);

  size = windowHeight*7/8 - mouseY/1.5 + mouseX/1.5;
  circle(windowWidth/2, windowHeight/2, size);


console.log(size);
if (size > windowWidth) { 
  song.setVolume(1, 0.1);
} else if (size > windowWidth / 4 * 3) {
  song.setVolume(0.75, 0.1);
} else if (size > windowWidth / 4 * 2) {
  song.setVolume(0.50, 0.1);
} else if (size > windowWidth / 4 * 1) {
  song.setVolume(0.25, 0.1);
} else {
  song.setVolume(0, 0.1);
}

}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    //background(255, 0, 0);
  } else {
    song.play();
    /*if(size > windowWidth/2) {
      setVolume(1, 2);
      //setVolume(mouseY/mouseX), 2);
    } else if (size < windowWidth/2) {
      setVolume(0.1, 2);
    }*/
    //setVolume(size/(size+abs(mouseX)), 2);
    //background(0, 255, 0);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



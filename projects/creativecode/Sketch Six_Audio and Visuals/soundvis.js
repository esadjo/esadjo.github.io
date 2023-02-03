// CHECK THAT THIS COUNTS FOR SKETCH 5!! (AUDIO)
var canvas = document.getElementById('canvas');
// https://p5js.org/examples/sound-load-and-play-sound.html
let song;
let player;

function preload() {
  song = loadSound('./audio/Clair_De_Lune_-_Aurbanni.mp3');
}

function setup() {
  //song.play();
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
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
let circle1;
let circle2; 
let circle3; 
let circle4;

//https://p5js.org/reference/#/p5/noise
let size;

function draw() {
  background(255, 255, 255);
  //let n = noise(xoff) * width;
  let n = mouseY;
  //line(0, n, windowWidth, n);
  noStroke();

  fill(-mouseY/2 + 50, 100 - 4*mouseY, -mouseY + 250);

  size = windowHeight*7/8 - mouseY/1.5 + mouseX/1.5;
  circle(windowWidth/2, windowHeight/2, size);

  // Testing
/*
circle1 = circle(windowWidth*1/5, windowHeight*7/8, 100);
circle2 = circle(windowWidth*2/5, windowHeight*7/8, 100);
circle3 = circle(windowWidth*3/5, windowHeight*7/8, 100);
circle4 = circle(windowWidth*4/5, windowHeight*7/8, 100);
*/
/*
circle1.mouseOver(song.setVolume(0.2, 2));
circle2.mouseOver(song.setVolume(0.5, 2));
circle3.mouseOver(song.setVolume(0.8, 2));
circle4.mouseOver(song.setVolume(1, 2));
*/ 

if (size > windowWidth /2 ) { 
  song.setVolume(1, 2);
} else {
  song.setVolume(0, 2);
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



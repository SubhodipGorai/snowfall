var a,b,c;
var i1,i2,i3;












var START = 0
var STOP = 1
var gamemode = STOP

function preload() {
  i1 = loadImage("snow2.jpg")
  i2 = loadImage("snow4.webp")
  i3 = loadImage("snow5.webp")
}

function setup() {
  createCanvas(1000,450);
  //a = createSprite(400, 200, 50, 50);
  //a.addImage(i1, "snow1")
  //a.scale = 0.7;












}

function draw() {
  background(i1);  

  drawSprites();

  fill("red")
  textSize(20);
  text("Press space to start snowfall", 30, 20);
  if (keyCode === 32) {
    gamemode = START
  }

if (gamemode === START) {
  fill("red")
  textSize(20);
  text("Press a to stop snowfall", 30, 20);
  if (frameCount % 5 == 0) {
    b = createSprite(random(0,830), -5, 50, 50);
    b.addImage("snow2" , i2)
    b.scale = 0.1;
    b.velocityY = 2;
    b.lifetime = 450/2
    if (keyDown("a")) {
      gamemode = STOP
      b.lifetime = 0
      }
  }
   if (frameCount % 10 == 0) {
    c = createSprite(random(0,830), -5, 50, 50);
    c.addImage("snow3" , i3)
    c.scale = 0.1;
    c.velocityY = 2;
    c.lifetime = 450/2
    if (keyDown("a")) {
      gamemode = STOP
      c.lifetime = 0
    }
  } 
} 










 
  
}
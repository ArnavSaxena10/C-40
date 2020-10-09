var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img, trackImg, flag=0;

function preload(){

car1Img = loadImage("images/car1.png");
car2Img = loadImage("images/car2.png");
car3Img = loadImage("images/car3.png");
car4Img = loadImage("images/car4.png");
trackImg = loadImage("images/track.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4 && gameState===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
    textSize(20);
    fill("Green");
    text("You Reached at "+player.rank+" position",camera.position.x, camera.position.y);
  }

  text("gameState: "+gameState,camera.position.x+20, camera.position.y+20)

  if(flag===1){
    
  }
}

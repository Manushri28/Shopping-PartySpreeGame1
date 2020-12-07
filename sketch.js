var database;
var form;
var playerCount = 0;
var PlayersArr;
var game, player;
var gameState = 0;
var runner1, runner2, runner3;
var roadIMG;
var list;

function preload(){

  roadIMG = loadImage("road.jpg")

}

function setup(){
  createCanvas(displayWidth, displayHeight*7);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  list = createSprite(displayWidth/5, displayHeight, 400, 500)
  list.shapeColor = "white"

}

function draw(){
    background(255)

    text("YOUR ITEMS :", displayWidth/5, 100)

    text("1) 1 Chocolate Cake", displayWidth/5, 100)
    text("2) 5 Hazlenut Pista Ice-Cream", displayWidth/5, 100)
    text("3) 5 Cold Drink Bottles", displayWidth/5, 100)
    text("4) 1 McCain Fries Packet", displayWidth/5, 100)
    text("5) Salad Vegetables", displayWidth/5, 100)
    text("6) 10 Candles", displayWidth/5, 100)
    text("7) 5 Paper Bags", displayWidth/5, 100)
    text("8) Potatoes, Peas, Carrots, \n Lettuce, Leaks, \n 3 Chesse Cubes", displayWidth/5, 100)

    if(playerCount === 3){
      gameState = 1
    }

    if(gameState === 1){
      game.play();
      background(roadIMG)

    }

}

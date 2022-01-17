var canvas, backgroundIMG;
var gameState = 0;
var playerCount;
var database;
var form, player, game;

function setup(){
    // chamar o banco de dados no nosso jogo
    database = firebase.database();
   canvas = createCanvas(500,500);
   
game = new Game();
game.getState();
game.start();



}

function draw(){
    backgraund("white");
    
}

let Player=require('./player.js');

let Game = function(image1,image2) {
  this.players = [];
  this.players.push(new Player("player1", image1));
  this.players.push(new Player("player2", image2));
  this.currentplayerIndex = 0;
};

Game.prototype.getCurrentPlayerInfo = function() {
  return this.players[this.currentplayerIndex];
};
Game.prototype.isDraw = function() {
  return this.getTotalMoves().length==9;
};
Game.prototype.insertMove=function(pos){
  this.players[this.currentplayerIndex].moves.push(pos);
  return this.players[this.currentplayerIndex];
};
Game.prototype.getTotalMoves=function(){
  let totalMoves=[];
  this.players[0].moves.forEach(function(element){
    totalMoves.push(element);
  });
  this.players[1].moves.forEach(function(element){
    totalMoves.push(element);
  });
  return totalMoves;
};
module.exports=Game;

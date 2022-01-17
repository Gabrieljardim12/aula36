class Game{
    constructor(){}

    getState(){
var gamestateRef = database.ref('gameState');

gameStateRef.on("value", function(data){
    gamestate = data.Val();
})
}
    


update(state){

    database.ref('/').update({
       gameState = state
    });
}


start(){
if(gameState === 0){
player = new Player();
player.getCount();
form.display();

}
}


}
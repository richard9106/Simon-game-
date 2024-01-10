let game = {
    score : 0,
    currentGame : [],
    playerMoves:[],
    choices:["button1","button2","button3","button4"],
    
}

function newGame(){
    game.score = 0;
    game.currentGame=[];
    game.playerMoves=[];
    showScore();
    addTurn();
    
}
function lightUp(circ){
    let currenCirc = document.getElementById(circ);
    currenCirc.classList.add("light");
    
    setTimeout(()=>{
        currenCirc.classList.remove("light");
    },400)
}

function showScore(){
    document.getElementById("score").innerText=game.score;
}

function addTurn(){
    game.playerMoves= [];
    game.currentGame.push(game.choices[(Math.floor(Math.random()*4))])
    showTurn();
}

function showTurn(){
    game.turnNumber = 0;
    let turn = setInterval(()=>{
        lightUp(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if(game.turnNumber >= game.currentGame.length){
            clearInterval(turn);
        }
    },800)
}



module.exports={game, newGame, showScore, addTurn, lightUp, showTurn};


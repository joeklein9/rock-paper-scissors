// Game
//  For each round
//    Ask the player for input
//    Randomly select computer input
//    Compare
//    Report winner of round + running score
//    if comupter or player reach 2
//      Break
//  Report game over


// GameState{
//  comp:1,
//  user:2    
//}


function getUserSelection(){
    return prompt("Please input rock, paper, or scissors.");
}

function getComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Returns the winer
// Draw, Comp, User
function compareSelections(playerSelection, computerSelection) {
    if (playerSelection === 'rock'){
       if(computerSelection === 'scissors') {
        return 'User';
       } else if(computerSelection === 'paper'){
        return 'Comp';
       }
    }
    else if (playerSelection === 'scissors') {
       if(computerSelection === 'paper') {
        return 'User';
       } else if(computerSelection === 'rock'){
        return 'Comp';
       }
    }
    else if (playerSelection === 'paper') {
       if(computerSelection === 'rock') {
        return 'User';
       } else if(computerSelection === 'scissors'){
        return 'Comp';
       }
    }
    return 'Draw';
}

function reportScore(gameState) {
    let winner = "";
    if(gameState.roundResults === 'Comp'){
        gameState.comp+=1;
       winner = "Computer wins!"
    } else if(gameState.roundResults === 'User'){
       winner = "You win!"
       gameState.user+=1;
    } else {winner = "It's a draw!"}
  console.log("You played "+gameState.userSelection+ " the computer played " + gameState.compSelection + ". " + winner + "     Score Summary: Computer "+ gameState.comp+", You "+ gameState.user+".");
}


function playRound(gameState){
    gameState.userSelection = getUserSelection();
    gameState.compSelection = getComputerSelection();
   gameState.roundResults = compareSelections(gameState.userSelection, gameState.compSelection);
   reportScore(gameState);
}


function playGame(){
   const gameState = {comp:0, user:0};
   while(gameState.comp <= 2 & gameState.user <= 2){
    playRound(gameState);
   }
  console.log("Game over.");
}

playGame();




// myArray = [A, B, C];
// myArray[0] => A;

// myObject = {A:"Hi", B:"By"};
// myObject[A] => "Hi"
// myObject.A = "Hi"
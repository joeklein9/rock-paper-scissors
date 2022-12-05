function playRound (userSelection) {
    alert ('You clicked ' + userSelection)
}

let rockButton = document.getElementById ('rock-button'); 
rockButton.addEventListener ('click', () => playRound ('rock'))

let scissorsButton = document.getElementById ('scissors-button');
scissorsButton.addEventListener ('click', () => playRound ('scissors'));

let paperButton = document.getElementById ('paper-button'); 
paperButton.addEventListener ('click', () => playRound ('paper') )














// Create a playRound function for one round 

// Make a conditional function that gives user selection based on what button pressed  == userSelection

// Make a function that gives you computer choice = computerSelection 

// Make a function that compares userSelection and computerSelection 

// Make a function determines winner of a round from userSelection vs computerSelection 

// Make gameState object to track score over multiple rounds

// Determine final winner once one player reaches 3 
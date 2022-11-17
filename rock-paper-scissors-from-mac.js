const getComputerChoice = () => {
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

let userScore = 0
let computerScore = 0


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'This round is a tie!';
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerScore;
        return 'You lose! Rock beats paper.';

    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++userScore;
        return 'You win! Rock beats scissors.';

    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++userScore;
        return 'You win! Paper beats rock.';

    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        ++computerScore;
        return 'You lose! Scissors beats paper.';

    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerScore;
        return 'You lose! Rock beats scissors.';

    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++userScore;
        return 'You win! Scissors beats paper.';

    }


}

function displayScore(userScore, computerScore) {
    if (userScore > 2) {
        return 'You win!';
    }
    else if (computerScore > 2) {
        return 'Computer wins!';
    }

    return 'Your score ' + userScore + 'Computer score ' + computerScore;
}


function game() {
    while (userScore != 3 && computerScore != 3) {
        const userInput = prompt("Welcome to Rock, Paper, Scissors! You are playing against the computer. First one to 3 points wins! Please input rock, paper, or scissors.");
        alert(playRound(userInput, getComputerChoice()));
        alert((displayScore(userScore, computerScore)));
    }
}
game();
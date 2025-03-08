function getBotChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice = prompt("choose: rock, paper or scissors").toLowerCase();
    return choice;
}

let playerScore = 0;
let botScore = 0;

function playRound(playerChoice, botChoice) {
    switch(playerChoice) {
        case "rock":
            switch(botChoice) {
                case "rock":
                    return "it's a tie";
                case "paper":
                    botScore++;
                    return "you lose! paper beats rock";
                case "scissors":
                    playerScore++;
                    return "you win! rock beats scissors";
            }
        case "paper":
            switch(botChoice) {
                case "rock":
                    playerScore++;
                    return "you win! paper beats rock";
                case "paper":
                    return "its a tie";
                case "scissors":
                    botScore++;
                    return "you lose! scissors beats paper";
            }
        case "scissors":
            switch(botChoice) {
                case "rock":
                    botScore++;
                    return "you lose! rock beats scissors";
                case "paper":
                    playerScore++;
                    return "you win! scissors beats paper";
                case "scissors":
                    return "its a tie";
            }
        default:
            return "invalid player choice";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let botChoice = getBotChoice();
        console.log(playRound(playerChoice, botChoice));
    }

    if (playerScore > botScore) {
        return console.log("you won the game! \n", playerScore, " to ", botScore);
    } else if (botScore > playerScore) {
        return console.log("you lost the game! \n", botScore, " to ", playerScore);
    } else {
        return console.log("the game was a tie");
    }
}

console.log(playGame());
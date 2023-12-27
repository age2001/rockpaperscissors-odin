function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function gameRound(playerChoice, computerChoice) {
    let lowerPlayerChoice = toLowerCase(playerChoice);

    if (lowerPlayerChoice === "rock") {
        if (computerChoice === "paper") return false;
        if (computerChoice === "scissors") return true;
        if (computerChoice === "rock") alert("It was a draw!"); return null;
    } else if (lowerPlayerChoice === "paper") {
        if (computerChoice === "scissors") return false;
        if (computerChoice === "rock") return true;
        if (computerChoice === "paper") alert("It was a draw!"); return null;
    } else if (lowerPlayerChoice === "scissors") {
        if (computerChoice === "rock") return false;
        if (computerChoice === "paper") return true;
        if (computerChoice === "scissors") alert("It was a draw!"); return null;
    } else {
        alert("Choice input was invalid!");
        return null;
    }
}

function game() {
    let playerInput;
    let gameConditionBool;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerInput = prompt("Choose rock, paper, or scissors!");
        gameConditionBool = gameRound(playerInput, getComputerChoice());
        if (gameConditionBool === null) {
            i--;
        }
        if (gameConditionBool) {
            playerScore++;
        } else {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("Congratulations you won!");
    } else {
        console.log("You lost! Better Luck next time...")
    }
}

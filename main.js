function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function gameRound(playerChoice, computerChoice) {
    let lowerPlayerChoice = playerChoice.toLowerCase();
    console.log("Player choice: " + playerChoice + " | Computer choice: " + computerChoice);

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

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {gameRound("rock", getComputerChoice());});
paperButton.addEventListener("click", () => {gameRound("paper", getComputerChoice());});
scissorsButton.addEventListener("click", () => {gameRound("scissors", getComputerChoice());});

const mainDiv = document.querySelector("div");

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
            continue;
        }
        if (gameConditionBool) {
            playerScore++;
            alert("You won this round!");
        } else {
            computerScore++;
            alert("You lost this round...");
        }
        console.log("Score P|C: " + playerScore + " | " + computerScore);
        if (playerScore === 3 || computerScore === 3) {
            break;
        }
    }
    if (playerScore > computerScore) {
        console.log("Congratulations you won!");
    } else {
        console.log("You lost! Better Luck next time...");
    }
}

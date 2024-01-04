function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function gameRound(playerChoice, computerChoice) {
    mainDiv.textContent = "Player choice: " + playerChoice + " | Computer choice: "
                                                                    + computerChoice;

    if (playerChoice === "rock") {
        if (computerChoice === "paper") computerScore++;
        else if (computerChoice === "scissors") playerScore++;
        else if (computerChoice === "rock") {mainDiv.textContent += "\nIt was a draw!";}
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") computerScore++;
        else if (computerChoice === "rock") playerScore++;
        else if (computerChoice === "paper") {mainDiv.textContent += "\nIt was a draw!";}
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") computerScore++;
        else if (computerChoice === "paper") playerScore++;
        else if (computerChoice === "scissors") {mainDiv.textContent += "\nIt was a draw!";}
    } else {
        return null;
    }

    mainDiv.textContent += "\nP:" + playerScore + " | C:" + computerScore;
    if (playerScore === 3) {
        mainDiv.textContent += " You won!";
        playerScore = 0;
        computerScore = 0;
    } 
    if (computerScore === 3) {
        mainDiv.textContent += " You lost...";
        playerScore = 0;
        computerScore = 0;
    }
}

let playerScore = 0;
let computerScore = 0;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const mainDiv = document.querySelector("div");

rockButton.addEventListener("click", () => {gameRound("rock", getComputerChoice());});
paperButton.addEventListener("click", () => {gameRound("paper", getComputerChoice());});
scissorsButton.addEventListener("click", () => {gameRound("scissors", getComputerChoice());});


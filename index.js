const choices = ["rock", "paper", "scissors"];
const emojis = {
    rock: "👊",
    paper: "✋",
    scissors: "✌️",
};
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerscore = 0;
let computerscore = 0;

function PlayGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    console.log(playerChoice);

    let result;
    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        playerscore++;
    } else {
        result = "Computer wins";
        computerscore++;
    }
    console.log(result);
    playerDisplay.innerHTML = ` ${emojis[playerChoice]}`;
    computerDisplay.innerHTML = `${emojis[computerChoice]}`;
    resultDisplay.innerHTML = result;
    UpdateScoreDisplay();
}

function UpdateScoreDisplay() {
    playerscoredisplay.innerHTML = `${playerscore}`;
    computerscoredisplay.innerHTML = `${computerscore}`;
}




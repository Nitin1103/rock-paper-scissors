let playerScore = 0; //global

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
}

function getResult(playerChoice, computerChoice) {
    let score = undefined;
    if (playerChoice === computerChoice) {
        score = 0;
    }
    else if (playerChoice === 'Rock' && computerChoice === 'Scissors' || playerChoice === 'Paper' && computerChoice === 'Rock' || playerChoice === 'Scissors' && computerChoice === 'Paper') {
        score = 1;
    }
    else {
        score = -1;
    }
    return score;
}

function showResult(score, playerChoice, computerChoice) {
    const playerScoreDiv = document.getElementById('player-score');
    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    handsDiv.innerText = `👨‍🦱: ${playerChoice} vs. 🤖: ${computerChoice}`;

    if (score == -1) {
        resultDiv.innerText = 'You Lose!';
        playerScore--;
    }
    else if (score == 1) {
        resultDiv.innerText = 'You Win!';
        playerScore++;
    }
    else {
        resultDiv.innerText = `It's a Draw`;
    }
    console.log('playerscore:' + playerScore);
    playerScoreDiv.innerText = playerScore;
}

function onClickRPS(playerChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randIndex = Math.floor(Math.random() * 3);
    let compChoice = choices[randIndex];
    let result = getResult(playerChoice, compChoice);
    showResult(result, playerChoice, compChoice);
}

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton');
    rpsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const choice = button.value;
            onClickRPS(choice);
        });
    });
    let endGameBtn = document.getElementById('endGameButton');
    endGameBtn.addEventListener('click', () => endGame());
}

function endGame() {
    const playerScoreDiv = document.getElementById('player-score');
    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    playerScoreDiv.innerText = "";
    resultDiv.innerText = "";
    handsDiv.innerText = "";
    playerScore = 0;
}

playGame();
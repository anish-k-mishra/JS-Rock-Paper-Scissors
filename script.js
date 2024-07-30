document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultDiv = document.getElementById('result');
    const winsSpan = document.getElementById('wins');
    const lossesSpan = document.getElementById('losses');
    const tiesSpan = document.getElementById('ties');

    let scores = {
        wins: 0,
        losses: 0,
        ties: 0
    };

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const winner = determineWinner(userChoice, computerChoice);
            updateScores(winner);
            displayResult(userChoice, computerChoice, winner);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'tie';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'win';
        } else {
            return 'lose';
        }
    }

    function updateScores(result) {
        if (result === 'win') {
            scores.wins++;
        } else if (result === 'lose') {
            scores.losses++;
        } else {
            scores.ties++;
        }
        winsSpan.textContent = scores.wins;
        lossesSpan.textContent = scores.losses;
        tiesSpan.textContent = scores.ties;
    }

    function displayResult(userChoice, computerChoice, result) {
        let resultText = '';
        if (result === 'win') {
            resultText = 'You win!';
        } else if (result === 'lose') {
            resultText = 'You lose!';
        } else {
            resultText = 'It\'s a tie!';
        }
        resultDiv.innerHTML = `
            <p>You chose: ${userChoice}</p>
            <p>Computer chose: ${computerChoice}</p>
            <p>${resultText}</p>
        `;
    }
});

let result = '*****';
const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

function getMove() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * 3)];
}

function update() {
    document.querySelector('.js-score').innerHTML = `Result: ${result} | Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

function getResult(computer, user) {
    if (user === computer) {
        result = 'tie';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        result = 'won';
    } else {
        result = 'lose';
    }

    if (result === 'won') score.wins++;
    else if (result === 'tie') score.ties++;
    else score.losses++;

    localStorage.setItem('score', JSON.stringify(score));
    update();

    document.querySelector('.js-result').innerHTML = `You: <img src="images/${user}-emoji.png" class="move-icon"> <img src="images/${computer}-emoji.png" class="move-icon"> Computer`;
}

function play(userMove) {
    const computerMove = getMove();
    getResult(computerMove, userMove);
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    result = '*****';
    localStorage.removeItem('score');
    update();
}
update();
const startButton = document.getElementById('start-btn');
const gameAreaElement = document.getElementById('game-area');

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    gameAreaElement.classList.remove('hide');
}

function selectNextQuestion() {

}

function selectAnswer() {

}
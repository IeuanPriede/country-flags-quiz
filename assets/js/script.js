const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    gameAreaElement.classList.remove('hide');
    setNextQuestion();
}

function showQuestion(question) {

}

function checkAnswer() {

}

function incrementScore() {

}

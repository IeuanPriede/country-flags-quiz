const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const gameAreaElement = document.getElementById('game-area');
const questionAreaElement = document.getElementById('question-area');
const answerButtonsElement = document.getElementById('answer-buttons');
const question1Element = document.getElementById('question1');

/* Listens for a mouse click to start game */
startButton.addEventListener('click', startGame);

/* Starts the game */
function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    gameAreaElement.classList.remove('hide');
    question1Element.classList.remove('hide');
    setNextQuestion();
}

/* Checks for correct/wrong answers */
function checkAnswer() {

}

/* Counts score */
function incrementScore() {

}

function gameArea() {

}
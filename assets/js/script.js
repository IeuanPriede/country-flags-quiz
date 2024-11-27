const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const gameAreaElement = document.getElementById('game-area');
const questionAreaElement = document.getElementById('question-area');
const answerButtonsElement = document.getElementById('answer-buttons');
const question1Element = document.getElementById('question1');

let currentQuestionIndex

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    gameAreaElement.classList.remove('hide');
    question1Element.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion(questionArea) {
    questionElement.src= question.question
}

function checkAnswer() {

}

function incrementScore() {

}

function gameArea() {

}

const questions = [
     {
      question: '',
      answers: [
        { text: 'Latvia', correct: true },
        { text: 'Austria', correct: false },
        { text: 'Armenia', correct: false},
        { text: 'France', correct: false}
      ]
    },
]

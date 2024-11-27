const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const gameAreaElement = document.getElementById('game-area');
const questionElement = document.getElementById(question);
const answerButtonsElement = document.getElementById('answer-buttons');

let currentQuestionIndex

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    gameAreaElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion(question) {
}

function selectAnswer() {

}

const questions = [
    {
        question: "assets/images/Flag_of_Latvia.svg.png",
        answers: [
            { text: 'Latvia', correct: true},
            { text: 'Austria', correct: false},
            { text: 'Armenia', correct: false},
            { text: 'France', correct: false}
        ]
        question: "assets/images/Flag_of_Ghana.svg.png",
        answers: [
            { text: 'India', correct: false},
            { text: 'Cuba', correct: false},
            { text: 'Ghana', correct: true},
            { text: 'Sierra Leone', correct: false}
        ]
    }
]
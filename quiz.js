const questions = [
    {
        question: "Which one from these is language for front-end?",
        answers: [
            { text: "html", correct: true },
            { text: "node", correct: false },
            { text: "express", correct: false },
            { text: "c++", correct: false }
        ]
    },
    {
        question: "Which is smallest continent in world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Which is language is server side?",
        answers: [
            { text: "Node", correct: true },
            { text: "html", correct: false },
            { text: "css", correct: false },
            { text: "Js", correct: false },
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers: [
            { text: "kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "sahara", correct: false },
            { text: "Antarctic", correct: true },
        ]
    },
    {
        question: "Which is largest ocean in the world?",
        answers: [
            { text: "Pacific", correct: false },
            { text: "Atlantic", correct: false },
            { text: "Indian", correct: false },
            { text: "Arctic", correct: true },
        ]
    }
];

let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex;
let score;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showquestion();
}

function showquestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}

function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }    
}

//answerButton.firstChild is used to remove the first child of the answerButton element.
startQuiz();
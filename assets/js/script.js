var startButton = document.querySelector(".start-button");
var timerDisplay = document.querySelector(".timer-count");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var question = document.querySelector(".question");

var questionsButton = document.querySelectorAll(".possible-questions button")

var correctCounter = 0
var wrongCounter = 0
var timer;
var timerCount;
var isCorrect = false;

const myQuestions = [
{
    question:"Who invented JavaScript?",
    answers:
    [
        "Douglas Crockford",
        "Brendan Eich",
        "Wesley Walker",
],
    correctAnswer: 1
},
{
    question:"Which one of these is a JavaScript Package Manager?",
    answers:
    [
        "TypeScript",
        "Node.js",
        "npm",
    ],
    correctAnswer: 2
},
{
    question:"Which tool can you use to ensure code quality?",
    answers:
    [
        "ESLint",
        "jQuery",
        "Angular",
    ],
    correctAnswer: 0
}
];


// The startQuiz function is called when the start button is clicked
function startQuiz(){
    isCorrect = false;
    timerCount = 75; 
    console.log(isCorrect);
  // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer();
    console.log(startButton);    
    printQuestion()
    
}

function printQuestion(){
    const currentQuestion = myQuestions[0]
    for (let index = 0; index < questionsButton.length; index++) {
        const button = questionsButton[index];
        const question = currentQuestion.answers[index];
        button.textContent=question
        const isCorrectAnswer=currentQuestion.correctAnswer==index
        button.value=isCorrectAnswer
    }
    
}

// The winGame function is called when the win condition is met
function correctAnswer() {
    question.textContent = "correctAnswer";
    correctCounter++
    correct.textContent=correctCounter
    
  }
  
 function incorrectAnswer() {
    question.textContent = "incorrectAnswer";
    wrongCounter++
    wrong.textContent=wrongCounter
    timerCount-=10
  }

// The setTimer function starts and stops the timer and triggers 
function startTimer(){

    timer = setInterval(function() {
        timerCount--;
        timerDisplay.textContent = timerCount;
        if (timerCount <= 0) {
          // Tests if correct condition is met
          clearInterval(timer);
          question.textContent="Game Over"
        }
      }, 1000);

}

function questionAnswer(event){
console.log(event.currentTarget);
if (event.currentTarget.value == "true"){
    correctAnswer()
}
else{
    incorrectAnswer()
}

}
// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);
questionsButton.forEach(function (button){
button.addEventListener("click", questionAnswer)

})


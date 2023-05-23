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
var questionIndex = 0

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
  // Prevents start button from being clicked when guiz is in progress
    startButton.disabled = true;
    startTimer();
    console.log(startButton);    
    printQuestion()
    
}

function printQuestion(){
    const currentQuestion = myQuestions[questionIndex]
    //display question on the screen
    question.textContent=currentQuestion.question
    console.log(questionIndex, currentQuestion);
    for (let index = 0; index < questionsButton.length; index++) {
        const button = questionsButton[index];
        const question = currentQuestion.answers[index];
        button.textContent=question
        const isCorrectAnswer=currentQuestion.correctAnswer==index
        button.value=isCorrectAnswer
    }
    
}

// The correctAnswer function is called with the correct answer
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

// The startTimer function starts and stops the timer 
function startTimer(){

    timer = setInterval(function() {
        timerCount--;
        timerDisplay.textContent = timerCount;
        if (timerCount <= 0) {
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
if (questionIndex >= myQuestions.length-1){   
    questionIndex=EndGame()
}
else{
    questionIndex ++
}

    printQuestion()

}


function EndGame(){


}

// Attach event listeners
startButton.addEventListener("click", startQuiz);
questionsButton.forEach(function (button){
button.addEventListener("click", questionAnswer)

})


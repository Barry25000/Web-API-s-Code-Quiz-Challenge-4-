var startButton = document.querySelector(".start-button");
var timerDisplay = document.querySelector(".timer-count");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var question = document.querySelector(".question");


var correctCounter = 0
var WrongCounter = 0
var timer;
var timerCount;
var isCorrect = false;

// The startQuiz function is called when the start button is clicked
function startQuiz(){
    isCorrect = false;
    timerCount = 10; 
    console.log(isCorrect);
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
//   renderBlanks()
  startTimer()
    
    
    
    console.log(startButton);
    
}


// The setTimer function starts and stops the timer and triggers ******winGame() and loseGame()*******
function startTimer(){

    timer = setInterval(function() {
        timerCount--;
        timerDisplay.textContent = timerCount;
        if (timerCount >= 0) {
          // Tests if correct condition is met
          if (isCorrect && timerCount > 0) {
            // Clears interval and stops timer
            clearInterval(timer);
            winGame();
          }
        }
        // Tests if time has run out
        if (timerCount === 0) {
          // Clears interval
          clearInterval(timer);
          loseGame();
        }
      }, 1000);

}

// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);



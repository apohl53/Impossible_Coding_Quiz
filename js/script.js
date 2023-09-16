// need timer
var outputEl = document.querySelector("#output");
var startBtn = document.querySelector("#start");
var choicesDiv = document.querySelector(".choices");
var questionIndex = 0;
var time = 60;

function start() {
  showQuestion();
  var timer = setInterval(function () {
    time--;
    if (time < 0) {
      time = 0;
    }
    outputEl.innerText = time;

    console.log(time);

    if (time <= 0) {
      clearInterval();
    }
  }, 1000);
}

function makeChoice(eventObj) {
  var button = eventObj.target;
  var id = button.id;

  // if button is not equal to "correct" lose 10 sec
  if (id !== "correct") {
    time -= 10;

    questionIndex++;

    if (questionIndex > questions.length) {
      //they have won!
    } else {
      showQuestion();
    }
  }
}

function showQuestion() {
  //show current question based on index
}

startBtn.addEventListener("click", start);
choicesDiv.addEventListener("click", makeChoice);

//number in window changes to = count
//transition time = 1 sec

//need to ask questions with multiple choice answers

//need to remove time when wrong answer is selected

//need to make game end when all correct answers are selected or time runs out
// do i have to turn count into a variable to be referenced?
// if statement that says if count = 0 or all answers are correct

if (time === 0) {
  console.log("Game Over! Try again!");
} else if ((game = "won")) {
  console.log("Yay, you won!");
}

// need timer
var questionWrap = document.querySelector("#question-wrap");
var timeEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var choicesDiv = document.querySelector(".choices");
var questionTextEl = document.querySelector("#question-wrap h3");
var questionIndex = 0;
var choiceAlert = document.querySelector("#test");
var time = 60;
var score = 0;
var question;

function showQuestion() {
  var question = questions[questionIndex];

  questionTextEl.innerText = question.text;

  choicesDiv.innerHTML = " ";

  question.choices.forEach(function (choice) {
    choicesDiv.insertAdjacentHTML(
      "beforeend",
      "<button>" + choice + "</button>"
    );
  });
}

function checkAnswer(e) {
  var button = e.target;
  var buttonText = button.innerText;

  if (buttonText === questions[questionIndex].correctAnswer) {
    choiceAlert.innerText = "Correct!";
  } else {
    choiceAlert.innerText = "Wrong!";
    time -= 10;
  }

  choiceAlert.classList.remove("hide");

  setTimeout(function () {
    choiceAlert.classList.add("hide");
  }, 1500);

  questionIndex++;

  if (questionIndex === questions.length) {
    return showHighscores();
  }

  showQuestion();
}

// Starts game, makes assets visible, runs show question function, starts timer
function startGame() {
  questionWrap.classList.remove("hide");
  timeEl.classList.remove("hide");
  startBtn.classList.add("hide");

  showQuestion();

  var timer = setInterval(function () {
    time--;
    if (time < 0) {
      time = 0;
    }
    timeEl.innerText = time;

    // console.log(time);

    if (time <= 0) {
      clearInterval();
    }
  }, 1000);
}

function showHighscores() {
  //clear time interval

  //move the user to a different html page

  localStorage.setItem("score", time);
  window.location = "./highscores.html";
}

startBtn.addEventListener("click", startGame);
choicesDiv.addEventListener("click", checkAnswer);

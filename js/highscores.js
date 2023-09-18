var scoreOutput = document.querySelector("#score-output");
var showScoresBtn = document.querySelector("#show-scores");
var scoresOutputDiv = document.querySelector(".scores-output");
var scoreForm = document.querySelector("#score-form");
var scoreFormWrap = document.querySelector(".score-form-wrap");

function getHighscores() {
  return JSON.parse(localStorage.getItem("highscores")) || [];
}

function saveHighscore() {
  var nameInput = document.querySelector("#nameinput");
  var name = nameInput.value;
  var score = localStorage.getItem("score"); // Get the score from local storage
  var highscores = getHighscores();

  highscores.push({
    name: name,
    score: score,
  });

  localStorage.setItem("highscores", JSON.stringify(highscores));
}

function showScore() {
  var score = localStorage.getItem("score");
  scoreOutput.innerText = "Your Highscore " + score;
}

function showScoreOutput() {
  // target highscores button
  // show highscoresForm
  // then it should hide the scores output
  scoreFormWrap.classList.add("hide");
  scoresOutputDiv.classList.remove("hide");

  var highscores = getHighscores();

  if (!highscores.length) {
    scoresOutputDiv.innerHTML = "<p>No scores have been saved</p>";
  }

  highscores.forEach(function (scoreObject) {
    scoresOutputDiv.insertAdjacentHTML(
      "beforeend",
      `
    <div>
        <h3>Name: ${scoreObject.name}</h3>
        <p>Score: ${scoreObject.score}</p>
    </div>
    `
    );
  });
}

showScore();

scoreForm.addEventListener("submit", saveHighscore);
showScoresBtn.addEventListener("click", showScoreOutput);

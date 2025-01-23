let userName = "";
let selectedCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let startTime;


function startQuiz() {
  const nameInput = document.getElementById("username").value;
  const userNameLable=document.getElementById("userName");
  const enterBtn=  document.getElementById("enterBtn");

  if (!nameInput) {
    alert("Please enter your name.");
    return;
  }
  userName = nameInput.toUpperCase();
  userNameLable.textContent=`HELLO ${userName}`;
  document.getElementById("username").classList.add("hidden");
  enterBtn.classList.add("hidden");
}

function selectCategory(category) {
  if (!userName) {
    alert("Please enter your name first.");
    return;
  }
  selectedCategory = category;
  currentQuestionIndex = 0;
  score = 0;
  startTime = new Date();
  loadQuizPage();
}

function loadQuizPage() {
  const categoryQuestions = questions[selectedCategory];
  if (!categoryQuestions) {
    alert("No questions available for this category.");
    return;
  }

  document.body.innerHTML = `
    <div class="container">
      <header>
        <h1>${selectedCategory} Quiz</h1>
        <p>Time: <span id="timer">00:00</span> | Score: <span id="score">${score}</span></p>
      </header>
      <section id="quiz">
        <p id="question-number">Question ${currentQuestionIndex + 1}</p>
        <p id="question">${categoryQuestions[currentQuestionIndex].question}</p>
        <div id="options">
          ${categoryQuestions[currentQuestionIndex].options
            .map(
              (option, index) =>
                `<button onclick="checkAnswer(${index})">${option}</button>`
            )
            .join("")}
        </div>
      </section>
    </div>`;
  startTimer();
}

function checkAnswer(selectedIndex) {
  const categoryQuestions = questions[selectedCategory];
  const currentQuestion = categoryQuestions[currentQuestionIndex];

  if (
    currentQuestion.options[selectedIndex] === currentQuestion.answer
  ) {
    score += 10;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < categoryQuestions.length) {
    loadQuizPage();
  } else {
    showResults();
  }
}

function showResults() {
  const totalTime = Math.floor((new Date() - startTime) / 1000);
  document.body.innerHTML = `
    <div class="container">
      <h1>Quiz Results</h1>
      <p>Name: ${userName}</p>
      <p>Total Questions: ${questions[selectedCategory].length}</p>
      <p>Correct Answers: ${score / 10}</p>
      <p>Score: ${score}</p>
      <p>Total Time: ${totalTime} seconds</p>
      <button onclick="location.reload()">Restart</button>
    </div>`;
}

function startTimer() {
  let startTime = new Date();
  setInterval(() => {
    const elapsedTime = Math.floor((new Date() - startTime) / 1000);
    document.getElementById("timer").textContent = `${Math.floor(elapsedTime / 60)}:${elapsedTime % 60}`;
  }, 1000);
}
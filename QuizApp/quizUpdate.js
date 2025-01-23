// Initialize variables
let selectedCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

// Function to load the initial category selection screen
function loadCategoryPage() {
  console.log("Loading categories...");
  const categories = Object.keys(questions);
  document.getElementById("app").innerHTML = `
    <div class="container">
      <h1>Welcome to the Quiz App!</h1>
      <p>Select a category to begin:</p>
      <div id="categories">
        ${categories
          .map(
            (category) =>
              `<button class="category-btn" onclick="selectCategory('${category}')">${category}</button>`
          )
          .join("")}
      </div>
    </div>`;
}

// Function to handle category selection
function selectCategory(category) {
  selectedCategory = category;
  currentQuestionIndex = 0;
  score = 0;
  loadQuizPage();
}

// Function to load the quiz page
function loadQuizPage() {
  const categoryQuestions = questions[selectedCategory];
  document.getElementById("app").innerHTML = `
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
                `<button class="option-btn" onclick="checkAnswer(${index})">${option}</button>`
            )
            .join("")}
        </div>
      </section>
    </div>`;
  startTimer();
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
  const categoryQuestions = questions[selectedCategory];
  const correctAnswer = categoryQuestions[currentQuestionIndex].answer;
  const selectedAnswer =
    categoryQuestions[currentQuestionIndex].options[selectedIndex];

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < categoryQuestions.length) {
    loadQuizPage();
  } else {
    clearInterval(timerInterval);
    showResultPage();
  }
}

// Function to start the timer
function startTimer() {
  const timerElement = document.getElementById("timer");
  if (!timerElement) {
    console.error("Timer element not found!");
    return;
  }

  let elapsedSeconds = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    elapsedSeconds++;
    const minutes = Math.floor(elapsedSeconds / 60).toString().padStart(2, "0");
    const seconds = (elapsedSeconds % 60).toString().padStart(2, "0");
    timerElement.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

// Function to show the result page
function showResultPage() {
  document.getElementById("app").innerHTML = `
    <div class="container">
      <h1>Quiz Completed!</h1>
      <p>Your score is: <strong>${score}</strong></p>
      <button onclick="loadCategoryPage()">Restart Quiz</button>
    </div>`;
}

// Load the category selection page on initial load
loadCategoryPage();
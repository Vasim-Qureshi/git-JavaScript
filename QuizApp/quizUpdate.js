// Initialize variables
let userName = "";
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
      <div class="logo-container">
        <img src="https://tse2.mm.bing.net/th?id=OIP.FvJifuXRxyMZcuJmd99N9gHaDs&pid=Api&P=0&h=180" width="200px" alt="" srcset="">
      </div>    
      <h1>Welcome to the Quiz App!</h1>
      <section class="user-details">
        <label id="userName" for="username">Enter your name:</label>
        <input type="text" id="username" placeholder="Your Name">
        <button id="enterBtn" onclick="startQuiz()">Enter</button>
      </section>                      
      <h1>Select a category</h1>
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


// Function to handle category selection
function selectCategory(category) {
  if (!userName) {
    alert("Please enter your name first.");
    return;
  }
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
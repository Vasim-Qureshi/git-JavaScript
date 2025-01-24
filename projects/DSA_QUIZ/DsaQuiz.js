  const quizBox = document.getElementById('quiz-box');
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const resultBox = document.getElementById('result-box');
  const scoreEl = document.getElementById('score');
  const restartBtn = document.getElementById('restart-btn');
  const dsaQuizApp=dsaQuiz;
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = dsaQuizApp[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
  
    optionsEl.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option-btn');
      button.addEventListener('click', () => selectOption(option, button));
      optionsEl.appendChild(button);
    });
  
    nextBtn.disabled = true;
  }
  
  function selectOption(selectedOption, button) {
    const correctAnswer = dsaQuizApp[currentQuestionIndex].answer;
  
    if (selectedOption === correctAnswer) {
      score++;
      button.style.backgroundColor = '#28a745'; // Green for correct
    } else {
      button.style.backgroundColor = '#dc3545'; // Red for incorrect
    }
  
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
    nextBtn.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < dsaQuizApp.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    quizBox.style.display = 'none';
    resultBox.style.display = 'block';
    scoreEl.textContent = score;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultBox.style.display = 'none';
    quizBox.style.display = 'block';
    loadQuestion();
  }
  
  nextBtn.addEventListener('click', nextQuestion);
  restartBtn.addEventListener('click', restartQuiz);
  
  // Initialize the quiz
  loadQuestion();
  
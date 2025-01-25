let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;

function loadQuestions(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("category-selector").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById("question").textContent = questionData.que;
    document.getElementById("opt_1").textContent = questionData.opt_1;
    document.getElementById("opt_2").textContent = questionData.opt_2;
    document.getElementById("opt_3").textContent = questionData.opt_3;
    document.getElementById("opt_4").textContent = questionData.opt_4;
    document.getElementById("next").classList.add("hidden");
}

function checkAnswer(optionId) {
    const correct = document.getElementById("correct");
    const questionData = questions[currentCategory][currentQuestionIndex];
    const selectedAnswer = document.getElementById(optionId).textContent;
    if (selectedAnswer === questionData.ans) {
        correct.classList.remove("hidden");
        correct.textContent="CORRECT";
        score++;
        document.getElementById("options").classList.add("hidden");
        setTimeout(nextQuestion,2000);
    } else {
        alert("Wrong! The correct answer was: " + questionData.ans); 
    }
    // document.getElementById("next").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById("correct").classList.add("hidden");
    document.getElementById("options").classList.remove("hidden");
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").textContent = `Your score: ${score}/${questions[currentCategory].length}`;
    document.getElementById("category-selector").classList.remove("hidden");
}

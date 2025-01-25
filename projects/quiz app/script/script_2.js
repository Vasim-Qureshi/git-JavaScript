let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let totalStartTime = 0;
let questionStartTime = 0;
let totalTimeSpent = 0;

function loadQuestions(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    totalStartTime = Date.now();
    totalTimeSpent = 0;
    document.getElementById("category-selector").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("navbar").classList.remove("hidden");
    renderNavbar();
    showQuestion();
}

function renderNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.innerHTML = "";
    const totalQuestions = questions[currentCategory].length;
    for (let i = 0; i < totalQuestions; i++) {
        const navItem = document.createElement("a");
        navItem.textContent = i + 1;
        navItem.href = "#";
        navItem.className = i === currentQuestionIndex ? "active" : "";
        navItem.onclick = (e) => {
            e.preventDefault();
            currentQuestionIndex = i;
            showQuestion();
        };
        navbar.appendChild(navItem);
    }
}

function showQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    questionStartTime = Date.now();
    document.getElementById("question").textContent = questionData.que;
    document.getElementById("opt_1").textContent = questionData.opt_1;
    document.getElementById("opt_2").textContent = questionData.opt_2;
    document.getElementById("opt_3").textContent = questionData.opt_3;
    document.getElementById("opt_4").textContent = questionData.opt_4;
    renderNavbar();
    document.getElementById("prev").classList.toggle("hidden", currentQuestionIndex === 0);
    document.getElementById("next").classList.toggle("hidden", currentQuestionIndex === questions[currentCategory].length - 1);
}

function checkAnswer(optionId) {
    const questionData = questions[currentCategory][currentQuestionIndex];
    const selectedAnswer = document.getElementById(optionId).textContent;
    const timeSpentOnQuestion = (Date.now() - questionStartTime) / 1000;
    totalTimeSpent += timeSpentOnQuestion;

    if (selectedAnswer === questionData.ans) {
        score++;
        alert(` Correct! Time spent on this question: ${timeSpentOnQuestion.toFixed(2)} seconds`);
        console.log(timeSpentOnQuestion.toFixed(2));
        
        nextQuestion();
    } else {
        alert(`Wrong! The correct answer was: ${questionData.ans}. Time spent on this question: ${timeSpentOnQuestion.toFixed(2)} seconds`);
    }
    document.getElementById("next").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        showResult();
    }}

function prevQuestion() {
    currentQuestionIndex--;
    showQuestion();
}

function showResult() {
    const totalTime = (Date.now() - totalStartTime) / 1000;
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").textContent = `Your score: ${score}/${questions[currentCategory].length}. Total time spent: ${totalTime.toFixed(2)} seconds (Questions only: ${totalTimeSpent.toFixed(2)} seconds).`;
    document.getElementById("category-selector").classList.remove("hidden");
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        showResult();
    }
}

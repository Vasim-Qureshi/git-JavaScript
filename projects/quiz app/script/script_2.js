const questions = {
    html: [
        {id: 1, que: "HTML Question 1?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 1"},
        {id: 2, que: "HTML Question 2?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 2"},
        {id: 3, que: "HTML Question 3?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 3"},
        {id: 4, que: "HTML Question 4?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 4"},
    ],
    css: [
        {id: 1, que: "CSS Question 1?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 1"},
        {id: 2, que: "CSS Question 2?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 2"},
        {id: 3, que: "CSS Question 3?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 3"},
        {id: 4, que: "CSS Question 4?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 4"},
    ],
    js: [
        {id: 1, que: "JS Question 1?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 1"},
        {id: 2, que: "JS Question 2?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 2"},
        {id: 3, que: "JS Question 3?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 3"},
        {id: 4, que: "JS Question 4?", opt_1: "Option 1", opt_2: "Option 2", opt_3: "Option 3", opt_4: "Option 4", ans: "Option 4"},
    ]
};

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
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    questionStartTime = Date.now();
    document.getElementById("question").textContent = questionData.que;
    document.getElementById("opt_1").textContent = questionData.opt_1;
    document.getElementById("opt_2").textContent = questionData.opt_2;
    document.getElementById("opt_3").textContent = questionData.opt_3;
    document.getElementById("opt_4").textContent = questionData.opt_4;
    document.getElementById("next").classList.add("hidden");
}

function checkAnswer(optionId) {
    const questionData = questions[currentCategory][currentQuestionIndex];
    const selectedAnswer = document.getElementById(optionId).textContent;
    const timeSpentOnQuestion = (Date.now() - questionStartTime) / 1000;
    totalTimeSpent += timeSpentOnQuestion;

    if (selectedAnswer === questionData.ans) {
        score++;
        alert(`Correct! Time spent on this question: ${timeSpentOnQuestion.toFixed(2)} seconds`);
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
    }
}

function showResult() {
    const totalTime = (Date.now() - totalStartTime) / 1000;
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").textContent = `Your score: ${score}/${questions[currentCategory].length}. Total time spent: ${totalTime.toFixed(2)} seconds (Questions only: ${totalTimeSpent.toFixed(2)} seconds).`;
    document.getElementById("category-selector").classList.remove("hidden");
}

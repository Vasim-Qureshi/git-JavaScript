const html = [
    { id: 1, que: "What does HTML stand for?", opt_1: "Hyper Text Markup Language", opt_2: "Hyperlinks and Text Markup Language", opt_3: "Home Tool Markup Language", opt_4: "Hyper Tool Markup Language", ans: "Hyper Text Markup Language" },
    { id: 2, que: "Which HTML element is used to define the largest heading?", opt_1: "<h1>", opt_2: "<heading>", opt_3: "<h6>", opt_4: "<head>", ans: "<h1>" },
    { id: 3, que: "Which tag is used to create a hyperlink in HTML?", opt_1: "<a>", opt_2: "<link>", opt_3: "<href>", opt_4: "<url>", ans: "<a>" },
    { id: 4, que: "Which HTML element is used to insert an image?", opt_1: "<img>", opt_2: "<picture>", opt_3: "<image>", opt_4: "<src>", ans: "<img>" },
    { id: 5, que: "What is the purpose of the <title> tag?", opt_1: "To set the title of the web page", opt_2: "To define headings", opt_3: "To create hyperlinks", opt_4: "To include metadata", ans: "To set the title of the web page" }
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit-btn");
  const resultContainer = document.getElementById("result");
  const scoreDisplay = document.getElementById("score");
  const totalDisplay = document.getElementById("total");
  
  function loadQuiz() {
    html.forEach((question) => {
      let questionElement = document.createElement("div");
      questionElement.classList.add("question");
  
      questionElement.innerHTML = `
        <h3>${question.id}. ${question.que}</h3>
        <div class="options">
          <label><input type="radio" name="question-${question.id}" value="${question.opt_1}"> ${question.opt_1}</label>
          <label><input type="radio" name="question-${question.id}" value="${question.opt_2}"> ${question.opt_2}</label>
          <label><input type="radio" name="question-${question.id}" value="${question.opt_3}"> ${question.opt_3}</label>
          <label><input type="radio" name="question-${question.id}" value="${question.opt_4}"> ${question.opt_4}</label>
        </div>
      `;
  
      quizContainer.appendChild(questionElement);
    });
  
    totalDisplay.textContent = html.length;
  }
  
  function calculateScore() {
    let score = 0;
    html.forEach((question) => {
      const selectedOption = document.querySelector(`input[name="question-${question.id}"]:checked`);
      if (selectedOption && selectedOption.value === question.ans) {
        score++;
      }
    });
    return score;
  }
  
  submitButton.addEventListener("click", () => {
    const score = calculateScore();
    scoreDisplay.textContent = score;
    resultContainer.classList.remove("hidden");
  });
  
  loadQuiz();
  
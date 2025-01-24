const questions = {
    html: [
        {id: 1, que: "What does HTML stand for?", opt_1: "Hyper Text Markup Language", opt_2: "Hyperlinks and Text Markup Language", opt_3: "Home Tool Markup Language", opt_4: "Hyper Text Manipulation Language", ans: "Hyper Text Markup Language"},
        {id: 2, que: "Who is the father of HTML?", opt_1: "Tim Berners-Lee", opt_2: "Dennis Ritchie", opt_3: "James Gosling", opt_4: "Guido van Rossum", ans: "Tim Berners-Lee"},
        {id: 3, que: "Which tag is used for the largest heading?", opt_1: "<h1>", opt_2: "<h6>", opt_3: "<header>", opt_4: "<head>", ans: "<h1>"},
        {id: 4, que: "Which tag is used to create a hyperlink?", opt_1: "<a>", opt_2: "<link>", opt_3: "<href>", opt_4: "<anchor>", ans: "<a>"},
        {id: 5, que: "Which attribute is used to provide a unique identifier in HTML?", opt_1: "id", opt_2: "class", opt_3: "name", opt_4: "key", ans: "id"},
        {id: 6, que: "Which HTML tag is used to define an unordered list?", opt_1: "<ul>", opt_2: "<ol>", opt_3: "<li>", opt_4: "<list>", ans: "<ul>"},
        {id: 7, que: "Which tag is used to insert an image in HTML?", opt_1: "<img>", opt_2: "<image>", opt_3: "<src>", opt_4: "<picture>", ans: "<img>"},
        {id: 8, que: "What is the correct HTML tag for inserting a line break?", opt_1: "<br>", opt_2: "<break>", opt_3: "<lb>", opt_4: "<line>", ans: "<br>"},
        {id: 9, que: "Which tag is used to create a dropdown list in HTML?", opt_1: "<select>", opt_2: "<dropdown>", opt_3: "<option>", opt_4: "<list>", ans: "<select>"},
        {id: 10, que: "What is the purpose of the <title> tag in HTML?", opt_1: "Defines the document's title in the browser's tab", opt_2: "Displays a heading", opt_3: "Links to an external CSS file", opt_4: "Creates a hyperlink", ans: "Defines the document's title in the browser's tab"},
        {id: 11, que: "What does the <meta> tag provide in HTML?", opt_1: "Metadata about the document", opt_2: "Defines document structure", opt_3: "Embeds an image", opt_4: "Creates a table", ans: "Metadata about the document"},
        {id: 12, que: "Which tag is used to display a table in HTML?", opt_1: "<table>", opt_2: "<tab>", opt_3: "<row>", opt_4: "<data>", ans: "<table>"},
        {id: 13, que: "How can you make text bold in HTML?", opt_1: "<b>", opt_2: "<bold>", opt_3: "<strong>", opt_4: "<em>", ans: "<b>"},
        {id: 14, que: "Which tag is used to play audio in HTML?", opt_1: "<audio>", opt_2: "<sound>", opt_3: "<media>", opt_4: "<music>", ans: "<audio>"},
        {id: 15, que: "What does the <iframe> tag do?", opt_1: "Embeds another document within the current document", opt_2: "Displays an image", opt_3: "Defines an inline style", opt_4: "Creates a form", ans: "Embeds another document within the current document"},
        {id: 16, que: "Which tag is used to create a checkbox in HTML?", opt_1: "<input type='checkbox'>", opt_2: "<checkbox>", opt_3: "<input type='check'>", opt_4: "<option>", ans: "<input type='checkbox'>"},
        {id: 17, que: "Which HTML attribute specifies an alternate text for an image?", opt_1: "alt", opt_2: "src", opt_3: "title", opt_4: "name", ans: "alt"},
        {id: 18, que: "What is the default alignment of text in an HTML document?", opt_1: "Left", opt_2: "Center", opt_3: "Right", opt_4: "Justify", ans: "Left"},
        {id: 19, que: "Which doctype declaration is correct for HTML5?", opt_1: "<!DOCTYPE html>", opt_2: "<DOCTYPE HTML5>", opt_3: "<DOCTYPE html5>", opt_4: "<DOCTYPE>", ans: "<!DOCTYPE html>"},
        {id: 20, que: "Which attribute is used to open a link in a new tab?", opt_1: "target='_blank'", opt_2: "target='_new'", opt_3: "rel='newtab'", opt_4: "rel='_blank'", ans: "target='_blank'"}
    ],

    css: [
        {id: 1, que: "What does CSS stand for?", opt_1: "Cascading Style Sheets", opt_2: "Creative Style Sheets", opt_3: "Computer Style Sheets", opt_4: "Colorful Style Sheets", ans: "Cascading Style Sheets"},
        {id: 2, que: "Which property is used to change the background color?", opt_1: "background-color", opt_2: "color", opt_3: "bgcolor", opt_4: "background", ans: "background-color"},
        {id: 3, que: "How do you make text bold in CSS?", opt_1: "font-weight: bold;", opt_2: "font-style: bold;", opt_3: "text-weight: bold;", opt_4: "style: bold;", ans: "font-weight: bold;"},
        {id: 4, que: "Which property is used to change the font size?", opt_1: "font-size", opt_2: "text-size", opt_3: "font-style", opt_4: "size", ans: "font-size"},
        {id: 5, que: "How do you apply a CSS class to an element?", opt_1: "class='classname'", opt_2: "id='classname'", opt_3: "name='classname'", opt_4: "tag='classname'", ans: "class='classname'"},
        {id: 6, que: "Which property is used to set the text color?", opt_1: "color", opt_2: "text-color", opt_3: "font-color", opt_4: "background-color", ans: "color"},
        {id: 7, que: "Which property is used to align text to the center?", opt_1: "text-align: center;", opt_2: "align: center;", opt_3: "vertical-align: center;", opt_4: "justify: center;", ans: "text-align: center;"},
        {id: 8, que: "Which property is used to add a shadow to text?", opt_1: "text-shadow", opt_2: "font-shadow", opt_3: "shadow", opt_4: "text-outline", ans: "text-shadow"},
        {id: 9, que: "How do you make a list with no bullet points?", opt_1: "list-style-type: none;", opt_2: "text-decoration: none;", opt_3: "list-type: none;", opt_4: "bullet: none;", ans: "list-style-type: none;"},
        {id: 10, que: "What is the default position value in CSS?", opt_1: "static", opt_2: "relative", opt_3: "absolute", opt_4: "fixed", ans: "static"},
        {id: 11, que: "Which property is used to add space inside an element's border?", opt_1: "padding", opt_2: "margin", opt_3: "border-spacing", opt_4: "spacing", ans: "padding"},
        {id: 12, que: "Which property is used to add space outside an element?", opt_1: "margin", opt_2: "padding", opt_3: "border-spacing", opt_4: "spacing", ans: "margin"},
        {id: 13, que: "Which property controls the order of layers in overlapping elements?", opt_1: "z-index", opt_2: "layer-order", opt_3: "position", opt_4: "display", ans: "z-index"},
        {id: 14, que: "How do you make an element disappear but still occupy space?", opt_1: "visibility: hidden;", opt_2: "display: none;", opt_3: "opacity: 0;", opt_4: "hidden: true;", ans: "visibility: hidden;"},
        {id: 15, que: "Which property is used to create rounded corners?", opt_1: "border-radius", opt_2: "corner-radius", opt_3: "border-corner", opt_4: "radius", ans: "border-radius"},
        {id: 16, que: "Which property is used to set the maximum width of an element?", opt_1: "max-width", opt_2: "width", opt_3: "min-width", opt_4: "height", ans: "max-width"},
        {id: 17, que: "Which unit is relative to the font size of the root element?", opt_1: "rem", opt_2: "em", opt_3: "px", opt_4: "%", ans: "rem"},
        {id: 18, que: "How can you include an external CSS file in an HTML document?", opt_1: "<link rel='stylesheet' href='styles.css'>", opt_2: "<style src='styles.css'>", opt_3: "<script src='styles.css'>", opt_4: "<stylesheet href='styles.css'>", ans: "<link rel='stylesheet' href='styles.css'>"},
        {id: 19, que: "Which property is used to change the cursor icon?", opt_1: "cursor", opt_2: "pointer", opt_3: "icon", opt_4: "hover", ans: "cursor"},
        {id: 20, que: "What does the 'float' property do?", opt_1: "Positions an element to the left or right of its container", opt_2: "Centers an element", opt_3: "Adds space between elements", opt_4: "Makes an element scrollable", ans: "Positions an element to the left or right of its container"}
    ],

    js: [
        {id: 1, que: "What does JavaScript primarily run on?", opt_1: "Browser", opt_2: "Server", opt_3: "Operating System", opt_4: "Hardware", ans: "Browser"},
        {id: 2, que: "Which keyword is used to declare a variable in JavaScript?", opt_1: "var", opt_2: "let", opt_3: "const", opt_4: "All of the above", ans: "All of the above"},
        {id: 3, que: "What does 'typeof null' return?", opt_1: "object", opt_2: "null", opt_3: "undefined", opt_4: "number", ans: "object"},
        {id: 4, que: "Which symbol is used for comments in JavaScript?", opt_1: "//", opt_2: "/* */", opt_3: "#", opt_4: "Both // and /* */", ans: "Both // and /* */"},
        {id: 5, que: "How can you convert a string to a number in JavaScript?", opt_1: "Number()", opt_2: "parseInt()", opt_3: "parseFloat()", opt_4: "All of the above", ans: "All of the above"},
        {id: 6, que: "Which method is used to add an element to an array?", opt_1: "push()", opt_2: "add()", opt_3: "append()", opt_4: "insert()", ans: "push()"},
        {id: 7, que: "What will the following code output: console.log(2 + '2');?", opt_1: "'22'", opt_2: "4", opt_3: "Error", opt_4: "undefined", ans: "'22'"},
        {id: 8, que: "What is the correct syntax for a function in JavaScript?", opt_1: "function myFunc() {}", opt_2: "function = myFunc() {}", opt_3: "def myFunc() {}", opt_4: "func myFunc() {}", ans: "function myFunc() {}"},
        {id: 9, que: "How do you call a function named 'myFunction'?", opt_1: "myFunction()", opt_2: "call myFunction", opt_3: "myFunction[]", opt_4: "call function myFunction", ans: "myFunction()"},
        {id: 10, que: "Which event occurs when a user clicks on an HTML element?", opt_1: "onclick", opt_2: "onmouseover", opt_3: "onchange", opt_4: "onpress", ans: "onclick"},
        {id: 11, que: "Which operator is used to assign a value to a variable?", opt_1: "=", opt_2: "==", opt_3: "===", opt_4: "=>", ans: "="},
        {id: 12, que: "What does the '===' operator do in JavaScript?", opt_1: "Checks both value and type", opt_2: "Checks only value", opt_3: "Checks only type", opt_4: "Assigns a value", ans: "Checks both value and type"},
        {id: 13, que: "Which object in JavaScript is the root object?", opt_1: "Window", opt_2: "Document", opt_3: "Global", opt_4: "Parent", ans: "Window"},
        {id: 14, que: "Which method is used to join two arrays?", opt_1: "concat()", opt_2: "join()", opt_3: "merge()", opt_4: "append()", ans: "concat()"},
        {id: 15, que: "Which keyword is used to define an asynchronous function?", opt_1: "async", opt_2: "await", opt_3: "asynchronous", opt_4: "promise", ans: "async"},
        {id: 16, que: "What will the following code output: console.log(typeof NaN);?", opt_1: "number", opt_2: "NaN", opt_3: "undefined", opt_4: "string", ans: "number"},
        {id: 17, que: "How do you check if an object has a specific property?", opt_1: "'property' in object", opt_2: "object.has(property)", opt_3: "object[property] != undefined", opt_4: "object.includes(property)", ans: "'property' in object"},
        {id: 18, que: "How do you create an object in JavaScript?", opt_1: "{}", opt_2: "new Object()", opt_3: "Both {} and new Object()", opt_4: "object()", ans: "Both {} and new Object()"},
        {id: 19, que: "Which function is used to iterate over an array?", opt_1: "forEach()", opt_2: "map()", opt_3: "filter()", opt_4: "All of the above", ans: "All of the above"},
        {id: 20, que: "What does 'use strict' do in JavaScript?", opt_1: "Enforces strict mode for better error handling", opt_2: "Ignores type checking", opt_3: "Prevents errors from being thrown", opt_4: "Optimizes code execution", ans: "Enforces strict mode for better error handling"}
    ]  
};

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

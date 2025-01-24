const js=[
    {id: 1, que: "What is JavaScript primarily used for?", opt_1: "Styling web pages", opt_2: "Adding interactivity to web pages", opt_3: "Structuring web pages", opt_4: "Managing databases", ans: "Adding interactivity to web pages"},
    {id: 2, que: "Which company developed JavaScript?", opt_1: "Microsoft", opt_2: "Netscape", opt_3: "Google", opt_4: "Apple", ans: "Netscape"},
    {id: 3, que: "Which keyword is used to declare a variable in JavaScript?", opt_1: "var", opt_2: "let", opt_3: "const", opt_4: "All of the above", ans: "All of the above"},
    {id: 4, que: "What does 'DOM' stand for?", opt_1: "Document Object Model", opt_2: "Display Object Management", opt_3: "Digital Object Model", opt_4: "Document Orientation Model", ans: "Document Object Model"},
    {id: 5, que: "Which symbol is used for comments in JavaScript?", opt_1: "//", opt_2: "/* */", opt_3: "<!-- -->", opt_4: "Both // and /* */", ans: "Both // and /* */"},
    {id: 6, que: "Which method is used to find the length of a string?", opt_1: "length", opt_2: "size", opt_3: "strlen", opt_4: "count", ans: "length"},
    {id: 7, que: "How can you convert a string to an integer in JavaScript?", opt_1: "parseInt()", opt_2: "Number()", opt_3: "Both A and B", opt_4: "String()", ans: "Both A and B"},
    {id: 8, que: "Which method is used to add an element to the end of an array?", opt_1: "push()", opt_2: "pop()", opt_3: "shift()", opt_4: "unshift()", ans: "push()"},
    {id: 9, que: "What does 'NaN' represent in JavaScript?", opt_1: "Not a Number", opt_2: "Null and None", opt_3: "Negative and Null", opt_4: "None of the above", ans: "Not a Number"},
    {id: 10, que: "Which operator is used to compare both value and type?", opt_1: "===", opt_2: "==", opt_3: "=", opt_4: "!=", ans: "==="},
    {id: 11, que: "What is the correct way to create a function in JavaScript?", opt_1: "function myFunction() {}", opt_2: "def myFunction()", opt_3: "function: myFunction {}", opt_4: "fun myFunction() {}", ans: "function myFunction() {}"},
    {id: 12, que: "Which event occurs when a user clicks on an HTML element?", opt_1: "onclick", opt_2: "onchange", opt_3: "onhover", opt_4: "onmouseclick", ans: "onclick"},
    {id: 13, que: "What is the output of 'typeof null' in JavaScript?", opt_1: "object", opt_2: "null", opt_3: "undefined", opt_4: "string", ans: "object"},
    {id: 14, que: "How can you detect the client's browser name in JavaScript?", opt_1: "navigator.appName", opt_2: "browser.name", opt_3: "client.name", opt_4: "document.name", ans: "navigator.appName"},
    {id: 15, que: "Which function is used to parse JSON strings?", opt_1: "JSON.parse()", opt_2: "JSON.stringify()", opt_3: "JSON.convert()", opt_4: "JSON.toString()", ans: "JSON.parse()"},
    {id: 16, que: "What will 'console.log(2 + '2')' output?", opt_1: "22", opt_2: "4", opt_3: "undefined", opt_4: "NaN", ans: "22"},
    {id: 17, que: "Which method is used to remove the last element of an array?", opt_1: "pop()", opt_2: "push()", opt_3: "shift()", opt_4: "unshift()", ans: "pop()"},
    {id: 18, que: "Which keyword is used to define an asynchronous function?", opt_1: "async", opt_2: "await", opt_3: "setTimeout", opt_4: "promise", ans: "async"},
    {id: 19, que: "Which method is used to convert an array to a string?", opt_1: "join()", opt_2: "toString()", opt_3: "Both A and B", opt_4: "concat()", ans: "Both A and B"},
    {id: 20, que: "How can you check if a variable is an array?", opt_1: "Array.isArray()", opt_2: "isArray()", opt_3: "typeof", opt_4: "instanceof", ans: "Array.isArray()"},
    {id: 21, que: "What is the purpose of 'use strict' in JavaScript?", opt_1: "To enforce strict syntax rules", opt_2: "To disable errors", opt_3: "To enable debugging", opt_4: "To define global variables", ans: "To enforce strict syntax rules"},
    {id: 22, que: "Which object is used to handle dates in JavaScript?", opt_1: "Date", opt_2: "Time", opt_3: "Calendar", opt_4: "Clock", ans: "Date"},
    {id: 23, que: "What is a JavaScript Promise?", opt_1: "An object representing the eventual completion of an asynchronous operation", opt_2: "A function that resolves immediately", opt_3: "A way to handle events", opt_4: "A method for data validation", ans: "An object representing the eventual completion of an asynchronous operation"},
    {id: 24, que: "What does the 'this' keyword refer to in JavaScript?", opt_1: "The current object", opt_2: "The global object", opt_3: "The parent object", opt_4: "The current scope", ans: "The current object"},
    {id: 25, que: "Which method is used to add an event listener to an element?", opt_1: "addEventListener()", opt_2: "attachEvent()", opt_3: "onEvent()", opt_4: "setEvent()", ans: "addEventListener()"},
    {id: 26, que: "What is the result of '0 == false' in JavaScript?", opt_1: "true", opt_2: "false", opt_3: "undefined", opt_4: "null", ans: "true"},
    {id: 27, que: "What does 'JSON' stand for?", opt_1: "JavaScript Object Notation", opt_2: "JavaScript Online", opt_3: "Java Serialized Object Notation", opt_4: "JavaScript Output Notation", ans: "JavaScript Object Notation"},
    {id: 28, que: "Which operator is used to spread elements of an array?", opt_1: "...", opt_2: "=>", opt_3: "===", opt_4: "->", ans: "..."},
    {id: 29, que: "What is the correct syntax for a JavaScript arrow function?", opt_1: "() => {}", opt_2: "=> {}", opt_3: "() -> {}", opt_4: "() >> {}", ans: "() => {}"},
    {id: 30, que: "Which statement is used to stop a loop in JavaScript?", opt_1: "break", opt_2: "continue", opt_3: "stop", opt_4: "exit", ans: "break"},
    {id: 31, que: "Which method is used to sort elements of an array?", opt_1: "sort()", opt_2: "order()", opt_3: "arrange()", opt_4: "orderBy()", ans: "sort()"},
    {id: 32, que: "What does 'typeof undefined' return?", opt_1: "undefined", opt_2: "null", opt_3: "object", opt_4: "string", ans: "undefined"},
    {id: 33, que: "Which method is used to reverse an array?", opt_1: "reverse()", opt_2: "invert()", opt_3: "backward()", opt_4: "flip()", ans: "reverse()"},
    {id: 34, que: "What does 'new' keyword do in JavaScript?", opt_1: "Creates a new object", opt_2: "Deletes an object", opt_3: "Initializes a variable", opt_4: "Creates a new array", ans: "Creates a new object"},
    {id: 35, que: "Which JavaScript feature allows writing asynchronous code that looks synchronous?", opt_1: "Async/Await", opt_2: "Promises", opt_3: "Callbacks", opt_4: "Generators", ans: "Async/Await"},
    {id: 36, que: "Which loop structure is used to iterate over the properties of an object?", opt_1: "for...in", opt_2: "for...of", opt_3: "while", opt_4: "do...while", ans: "for...in"},
    {id: 37, que: "Which JavaScript method is used to delay execution of a function?", opt_1: "setTimeout()", opt_2: "setInterval()", opt_3: "delay()", opt_4: "wait()", ans: "setTimeout()"},
    {id: 38, que: "Which object method can be used to create a shallow copy of an object?", opt_1: "Object.assign()", opt_2: "Object.copy()", opt_3: "Object.clone()", opt_4: "Object.duplicate()", ans: "Object.assign()"},
    {id: 39, que: "What will be the output of 'console.log(typeof NaN)'?", opt_1: "number", opt_2: "NaN", opt_3: "undefined", opt_4: "object", ans: "number"},
    {id: 40, que: "Which method is used to combine two or more arrays?", opt_1: "concat()", opt_2: "merge()", opt_3: "combine()", opt_4: "append()", ans: "concat()"},
    {id: 41, que: "What does the 'finally' block do in a try-catch-finally statement?", opt_1: "Executes code after try and catch regardless of the outcome", opt_2: "Handles exceptions", opt_3: "Skips the catch block", opt_4: "Defines a function", ans: "Executes code after try and catch regardless of the outcome"},
    {id: 42, que: "What will 'console.log(1 + true)' output?", opt_1: "2", opt_2: "true1", opt_3: "NaN", opt_4: "undefined", ans: "2"},
    {id: 43, que: "Which keyword is used to declare a constant in JavaScript?", opt_1: "const", opt_2: "var", opt_3: "let", opt_4: "constant", ans: "const"},
    {id: 44, que: "What does the 'Promise.all()' method do?", opt_1: "Waits for all promises to resolve", opt_2: "Executes promises sequentially", opt_3: "Rejects immediately if one promise rejects", opt_4: "Both A and C", ans: "Both A and C"},
    {id: 45, que: "What is the difference between '==' and '===' in JavaScript?", opt_1: "'==' compares value only, '===' compares value and type", opt_2: "Both compare value and type", opt_3: "'==' is faster", opt_4: "'===' is used for strings only", ans: "'==' compares value only, '===' compares value and type"},
    {id: 46, que: "Which statement is true about 'let' and 'var'?", opt_1: "'let' has block scope, 'var' has function scope", opt_2: "'let' and 'var' are identical", opt_3: "'var' is faster than 'let'", opt_4: "'let' cannot be reassigned", ans: "'let' has block scope, 'var' has function scope"},
    {id: 47, que: "What is the purpose of 'Array.prototype.map()'?", opt_1: "To create a new array with the results of calling a function on every element", opt_2: "To filter array elements", opt_3: "To reverse array elements", opt_4: "To sort array elements", ans: "To create a new array with the results of calling a function on every element"},
    {id: 48, que: "Which method is used to check if a string contains a specific value?", opt_1: "includes()", opt_2: "contains()", opt_3: "hasValue()", opt_4: "search()", ans: "includes()"},
    {id: 49, que: "What is the output of 'console.log(typeof [])'?", opt_1: "object", opt_2: "array", opt_3: "undefined", opt_4: "function", ans: "object"},
    {id: 50, que: "Which method is used to round a number to the nearest integer?", opt_1: "Math.round()", opt_2: "Math.ceil()", opt_3: "Math.floor()", opt_4: "Math.abs()", ans: "Math.round()"}
];


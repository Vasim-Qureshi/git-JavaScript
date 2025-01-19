let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (!['+', '-', '*', '/'].includes(lastChar)) {
        display.value += operator;
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid calculation');
        clearDisplay();
    }
}

function clearDisplay() {
    display.value = '';
}

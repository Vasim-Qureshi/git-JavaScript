let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let userInput = document.getElementById('guessInput');
let submit = document.getElementById('submitGuess');

submit.addEventListener('click', function () {
  const userGuess = Number(userInput.value);
  const message = document.getElementById('message');

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100!';
    message.style.color = 'red';
    return;
  }

  attempts++;
  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts!`;
    message.style.color = 'green';
  } else if (userGuess > randomNumber) {
    message.textContent = `📉 Too high! Try again.random number was ${randomNumber}`;
    message.style.color = 'orange';
  } else {
    console.log(randomNumber);
    message.textContent = `📈 Too low! Try again.random number was ${randomNumber}`;
    message.style.color = 'orange';
  }
  userInput.value="";
});

document.getElementById('resetGame').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = 'Game reset. Start guessing!';
  document.getElementById('message').style.color = '#555';
});

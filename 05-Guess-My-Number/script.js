'use strict';

let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;

    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  } else if (guess > randomNumber) {
    wrongGuess('To high :(');
  } else if (guess < randomNumber) {
    wrongGuess('To low :(');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  randomNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

function wrongGuess(message) {
  if (score > 1) {
    document.querySelector('.score').textContent = score - 1;
    score -= 1;
    document.querySelector('.message').textContent = message;
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = 'Tou lost :(';
  }
}

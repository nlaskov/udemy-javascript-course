'use strict';

const playerZeroScoreEl = document.querySelector('#score--0');
const playerOneScoreEl = document.querySelector('#score--1');
const playerZeroCurrentEl = document.querySelector('#current--0');
const playerOneCurrentEl = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');
const playerZeroEl = document.querySelector('.player--0');
const playerOneEl = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let gameActive;
let currentScore;
let activePlayer;
const scores = [0, 0];

function init() {
  playerOneScoreEl.textContent = '0';
  playerZeroScoreEl.textContent = '0';
  playerZeroCurrentEl.textContent = '0';
  playerOneCurrentEl.textContent = '0';

  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  gameActive = true;

  diceImg.classList.add('hidden');
  playerOneEl.classList.remove('player--active');
  playerZeroEl.classList.add('player--active');
  playerOneEl.classList.remove('player--winner');
  playerZeroEl.classList.remove('player--winner');
}

init();

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerOneEl.classList.toggle('player--active');
  playerZeroEl.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (gameActive) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    diceImg.src = `dice-${randomNumber}.png`;
    diceImg.classList.remove('hidden');

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameActive) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] < 100) {
      switchPlayer();
    } else {
      gameActive = false;
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});

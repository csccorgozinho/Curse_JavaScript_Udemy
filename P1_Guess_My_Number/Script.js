'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBodyStyle = function (property, value) {
  document.querySelector('body').style[property] = value;
};

const setNumberStyle = function (property, value) {
  document.querySelector('.number').style[property] = value;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');
  // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBodyStyle('backgroundColor', '#60b347');
    setNumberStyle('width', '30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  setScore(score);
  setNumber('?');
  document.querySelector('.guess').value = '';

  setBodyStyle('backgroundColor', '#222');
  setNumberStyle('width', '15rem');
});

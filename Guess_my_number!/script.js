'use strict';
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Your Winner';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 7;
document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23)) */

let numberSecret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    /*  document.querySelector('.message').textContent = 'No Number'; */
    displayMessage('No Number');
  } else if (guess === numberSecret) {
    /* document.querySelector('.message').textContent = 'Correct Number'; */
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = numberSecret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== numberSecret) {
    if (score > 1) {
      /* document.querySelector('.message').textContent =
        guess > numberSecret ? 'Too High' : 'Too Low'; */
      displayMessage(guess > numberSecret ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      /* document.querySelector('.message').textContent = 'You Lost the game'; */
      displayMessage('You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  } /* else if (guess < numberSecret) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > numberSecret) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numberSecret = Math.trunc(Math.random() * 20) + 1;
  /*  document.querySelector('.message').textContent = 'Start guessing...'; */
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

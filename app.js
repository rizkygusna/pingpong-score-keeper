const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const scoreLimitSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let scoreLimit = scoreLimitSelect.value;
let isGameOver = false;

p1Button.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score == scoreLimit) {
      isGameOver = true;
      p1Display.classList.add('winner');
      p2Display.classList.add('loser');
    }
    p1Display.innerText = p1Score;
  }
});

p2Button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score == scoreLimit) {
      isGameOver = true;
      p2Display.classList.add('winner');
      p1Display.classList.add('loser');
    }
    p2Display.innerText = p2Score;
  }
});

scoreLimitSelect.addEventListener('change', function () {
  //this refers to scoreLimitSelect
  scoreLimit = parseInt(this.value); //convert string to integer
  reset();
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.innerText = p1Score;
  p2Display.innerText = p2Score;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('winner', 'loser');
}

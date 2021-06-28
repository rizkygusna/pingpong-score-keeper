const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
};

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
};

const resetButton = document.querySelector('#reset');
const scoreLimitSelect = document.querySelector('#playto');

let scoreLimit = scoreLimitSelect.value;
let isGameOver = false;

p1Button.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score == scoreLimit) {
      isGameOver = true;
      p1Display.classList.add('has-text-success');
      p2Display.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.innerText = p1Score;
  }
});

p2Button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score == scoreLimit) {
      isGameOver = true;
      p2Display.classList.add('has-text-success');
      p1Display.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
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
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-success', 'has-text-danger');
  p1Button.disabled = false;
  p2Button.disabled = false;
}

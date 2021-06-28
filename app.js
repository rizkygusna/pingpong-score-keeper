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

function changeScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score == scoreLimit) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.innerText = player.score;
  }
}

p1.button.addEventListener('click', function () {
  changeScore(p1, p2);
});

p2.button.addEventListener('click', function () {
  changeScore(p1, p2);
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

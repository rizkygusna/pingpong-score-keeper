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

function reset() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.innerText = p1.score;
  p2.display.innerText = p2.score;
  p1.display.classList.remove('has-text-success', 'has-text-danger');
  p2.display.classList.remove('has-text-success', 'has-text-danger');
  p1.button.disabled = false;
  p2.button.disabled = false;
}

p1.button.addEventListener('click', function () {
  changeScore(p1, p2);
});

p2.button.addEventListener('click', function () {
  changeScore(p2, p1);
});

scoreLimitSelect.addEventListener('change', function () {
  //this refers to scoreLimitSelect
  scoreLimit = parseInt(this.value); //convert string to integer
  reset();
});

resetButton.addEventListener('click', reset);

const scoreLimitSelect = document.querySelector('#playto');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const player1 = {
  score: document.querySelector('p1Display'),
  isWin: false,
};

const player2 = {
  score: document.querySelector('p2Display'),
  isWin: false,
};

const addScore = (player) => {
  const addedScore = player.score.innerText.parseInt() + 1;
  player.score.innerText = addedScore.toString();
};

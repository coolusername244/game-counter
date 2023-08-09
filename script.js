const scores = {
  lee: 0,
  maria: 0,
};

const updateScore = (player, value) => {
  if (scores[player] + value >= 0) {
    scores[player] += value;
    document.getElementById(player).textContent = scores[player];
    updateTotalScore();
  }
};

const updateTotalScore = () => {
  const totalScore = scores.lee + scores.maria;
  document.getElementById('total').textContent = totalScore;
};

//Event listeners for various buttons
document.getElementById("attackBossButton").addEventListener ("mousedown", () => {
  if(gameState.bossBunnyPosition >= 10){
    gameState.bossBunnyPosition -= gameState.knockback;
  }

  if(gameState.bossBunnyPosition <= 10){
    gameState.bossBunnyHealth -= gameState.attackDamage;
  }
  document.getElementById("attackBossButtonImage").src = "assets/attackButtonDown.png";
});

document.getElementById("attackBossButton").addEventListener("mouseup", () => {
  document.getElementById("attackBossButtonImage").src = "assets/attackButton.png";
});

document.getElementById("slayMinionButton").addEventListener("mousedown", () => {
  gameState.points++;
  document.getElementById("slayMinionButtonImage").src = "assets/chargeButtonDown.png";
});

document.getElementById("slayMinionButton").addEventListener("mouseup", () => {
  document.getElementById("slayMinionButtonImage").src = "assets/chargeButton.png";
});

document.getElementById("saveButton").addEventListener('mousedown', () => {
  document.getElementById("saveButtonImage").src = "assets/saveButtonDown.png";
  saveGame();
});

document.getElementById("saveButton").addEventListener('mouseup', () => {
  document.getElementById("saveButtonImage").src = "assets/saveButton.png";
});
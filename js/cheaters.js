function resetGame(){
  gameState.points = 0;
  gameState.dead = false;
  gameState.bossBunnyPosition = 0;
  gameState.bossBunnyHealth = 1000;
  gameState.attackDamage = 1;
  gameState.knockback = 1;

  upgrades = [new upgrade(1, 0.2, "Bunny Blaster"),
              new upgrade(2, 0.4, "Pink Pulverizer"),
              new upgrade(4, 0.8, "Rabbit Ravager"),
              new upgrade(8, 1.6, "Mammal Mangler")];
}

function winGame(){
  winState();
}

function loseGame(){
  loseState();
}
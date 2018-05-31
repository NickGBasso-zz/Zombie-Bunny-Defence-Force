//The games current state
let gameState = {
  points: 0,
  dead: false,
  bossBunnyPosition: 0,
  bossBunnyHealth: 1000,
  attackDamage: 4,
  knockback: 0.2
};

//Alert the player they've lost
function loseState(){
  alert("You have failed to triumph over the evil forces of the zombie bunny infestation. Humanity is doomed!");
  clearInterval(gameLoop);
}

//Alert the player that they've won, and set the status of the bunny to dead
function winState(){
  alert("You've triumphed over the evil forces of the zombie bunny infestation. Humanity is saved!");
  gameState.dead = true;
  clearInterval(gameLoop);
  draw();
}

//Check if the player has won or lost
function checkForEndState(){
  if(gameState.bossBunnyHealth <= 0){
    winState();
  }

  if(gameState.bossBunnyPosition >= 840){
    loseState();
  }
}

//Check if adding a new upgrade button is nessecary
function checkForNewUpgrades(){
  if(gameState.points >= 20 && !upgrades[0].added){
    addUpgradeElement(upgrades[0]);
    upgrades[0].added = true;
  }

  if(gameState.points >= 40 && !upgrades[1].added){
    addUpgradeElement(upgrades[1]);
    upgrades[1].added = true;
  }

  if(gameState.points >= 80 && !upgrades[2].added){
    addUpgradeElement(upgrades[2]);
    upgrades[2].added = true;
  }

  if(gameState.points >= 160 && !upgrades[3].added){
    addUpgradeElement(upgrades[3]);
    upgrades[3].added = true;
  }
}

//Save the gameState to local storage
function saveGame(){
  console.log("Attempting save...");
  try{
      save = {
        gameState: gameState,
        upgrades: upgrades
      };
      localStorage.setItem("save", JSON.stringify(save));
      console.log("Save complete...");
  }catch(error){
      console.error(error);
  }
}

//Load the gameState from local storage
window.onload = () => {
  console.log("Loading game...");
  try{
      const loadedData = JSON.parse(localStorage.getItem("save"));
      if(typeof loadedData !== null){
        gameState = loadedData.gameState;
        upgrades = loadedData.upgrades;
        console.log("Loading complete...");
      }
  }catch(error){
      console.error(error);
  }
}

//Update game logic every tick
function update(){
  checkForEndState();
  checkForNewUpgrades();
  gameState.bossBunnyPosition += 0.4;
}
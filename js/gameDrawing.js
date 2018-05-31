//Load the canas
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

//Initialize and load images
const images = {
  background: new Image(),
  boss: new Image(),
  deadBoss: new Image(),
  healthBarFull: new Image(),
  healthBarThreeQuarters: new Image(),
  healthBarHalf: new Image(),
  healthBarOneQuarter: new Image(),
};
images.background.src = "assets/bg.png";
images.boss.src = "assets/boss.png";
images.deadBoss.src = "assets/deadBoss.png";
images.healthBarFull.src = "assets/healthBarFull.png";
images.healthBarThreeQuarters.src = "assets/healthBarThreeQuarters.png";
images.healthBarHalf.src = "assets/healthBarHalf.png";
images.healthBarOneQuarter.src = "assets/healthBarOneQuarter.png";

//Draw a different healthbar depending on boss health
function drawBossHealth(){
  if(gameState.bossBunnyHealth >= 750){
    context.drawImage(images.healthBarFull, gameState.bossBunnyPosition, 130);
  }else if(gameState.bossBunnyHealth <= 750 && gameState.bossBunnyHealth >= 500){
    context.drawImage(images.healthBarThreeQuarters, gameState.bossBunnyPosition, 130);
  }else if(gameState.bossBunnyHealth <= 500 && gameState.bossBunnyHealth >= 250){
    context.drawImage(images.healthBarHalf, gameState.bossBunnyPosition, 130);
  }else if(gameState.bossBunnyHealth <= 250 && gameState.bossBunnyHealth >= 0){
    context.drawImage(images.healthBarOneQuarter, gameState.bossBunnyPosition, 130);
  }
}

function draw(){
  //DOM elements
  document.getElementById("pointsCounter").innerHTML = "Points: " + gameState.points;

  //Clear canvas
  context.drawImage(images.background, 0, 0);

  //Draw boss and health bar
  if(gameState.dead){
    context.drawImage(images.deadBoss, gameState.bossBunnyPosition, 380);
  }else{
    context.drawImage(images.boss, gameState.bossBunnyPosition, 170);
    drawBossHealth();
  }
}
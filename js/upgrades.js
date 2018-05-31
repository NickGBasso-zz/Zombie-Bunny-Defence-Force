class upgrade{
  constructor(damageBonus, knockbackBonus, name){
    this.damageBonus = damageBonus;
    this.knockbackBonus = knockbackBonus;
    this.name = name;
    this.unlocked = false;
    this.added = false;
  } 
}

let upgrades = [new upgrade(1, 0.2, "Bunny Blaster"),
                new upgrade(2, 0.4, "Pink Pulverizer"),
                new upgrade(4, 0.8, "Rabbit Ravager"),
                new upgrade(8, 1.6, "Mammal Mangler")];

//Add an upgrade button to the window
function addUpgradeElement(upgrade){
  const button = document.createElement("button");
  button.className = "upgradeButton";

  const buttonImage = document.createElement("img");
  buttonImage.className = "upgradeButtonImage";
  buttonImage.src = "assets/upgradeButton.png";

  const buttonText = document.createElement("div");
  buttonText.className = "buttonText";
  buttonText.innerHTML = upgrade.name;

  button.appendChild(buttonText);
  button.appendChild(buttonImage);
  
  const upgradesDiv = document.getElementById("upgrades");
  upgradesDiv.appendChild(button);

  button.addEventListener("mousedown", () => {
    if(!upgrade.unlocked){
      button.childNodes[1].src = "assets/upgradeButtonDown.png";

      gameState.attackDamage += upgrade.damageBonus;
      gameState.knockback += upgrade.knockbackBonus;

      upgrade.unlocked = true;
    }
  });
}
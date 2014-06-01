
//inventory
static var inventoryArray : int[] = [1,2,0,0,0];
var inventoryText : GameObject;
 
var healthPotionCooldown : boolean = false; 
 
function Update(){
 
	inventoryText.guiText.text = "Health Potion " + "[" + inventoryArray[0] + "]" + "\n" + "Mana Potion " + "[" + inventoryArray[1] + "]";
	
	if(Input.GetKeyDown("h")){
	
		if ((inventoryArray[0] > 0) && (healthPotionCooldown == false) && (playerStats.curHealth < playerStats.maxHealth)){
		
			healthPotionCooldown = true;
			potion1cooldown();
			healthPotion();
		}
	} 
}

function healthPotion(){

	playerStats.curHealth += 50;
	inventoryArray[0] -= 1;
}


function potion1cooldown(){
	
	for (var x=1; x<2; x++){
	
		yield WaitForSeconds(2);
		healthPotionCooldown = false;
	}
}
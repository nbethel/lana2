#pragma strict
//This script allows you to create equipment effects that will be called either OnEquip or WhileEquipped. This is usefull for magic effects and stat handling.
@script AddComponentMenu ("Inventory/Items/Equipment Effect")
@script RequireComponent(Item)

private var effectActive = false;
private var equipment : GameObject;
private var itemOut : boolean = false;

var forestCamoAmount : int = 0;
var caveCamoAmount : int = 0;

function Update(){
	durabilityEffects();
}

function durabilityEffects(){ //THIS IS WHERE YOU INSERT CODE YOU WANT TO EXECUTE AS LONG AS THE ITEM IS EQUIPPED
	if(effectActive == true){ //Active when object is in hand
	}	
}
	   
if (itemOut == true){
	effectActive = true;
}   
if (itemOut == false){
	effectActive = false;
}
					
function EquipmentEffectToggle(effectIs : boolean){	//Active when object is in inventory
										
	if (effectIs == true){
		
		itemOut = true;
		playerStats.maxHealth += 400;
		camouflage.curForestCamo += forestCamoAmount;
		camouflage.curCaveCamo += caveCamoAmount;
	}
	
	if (effectIs == false){

		itemOut = false;
		effectActive = false;
		playerStats.maxHealth -= 400;
		camouflage.curForestCamo -= forestCamoAmount;
		camouflage.curCaveCamo -= caveCamoAmount;
	}
}


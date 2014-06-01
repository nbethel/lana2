#pragma strict
//This script allows you to create equipment effects that will be called either OnEquip or WhileEquipped. This is usefull for magic effects and stat handling.
@script AddComponentMenu ("Inventory/Items/Equipment Effect")
@script RequireComponent(Item)

var effectActive = false;

var curDurability : int = 100;   
private var maxDurability : int = 100;

private var duration : float = 10; // duration in seconds

private var magicAxe : GameObject;

//------------------------MAKE VALUES MATCH DURABILITY. DURABILITY ALL GOOD, MAKE SHIT STICK TO IT. ------------------------------

function durabilityDown(){
	curDurability -= Time.deltaTime/duration;	
}
function durabilityEffects(){
	//-----> THIS IS WHERE YOU INSERT CODE YOU WANT TO EXECUTE AS LONG AS THE ITEM IS EQUIPPED. <-----	
		if(curDurability < 0){
			curDurability = 0;
		}
		if(curDurability > maxDurability){
			curDurability = maxDurability;
		}
		if(effectActive == true){   					//RUN WHEN OBJECT IS IN HAND
			durabilityDown();

			transform.renderer.material.SetFloat("_Blend", curDurability * 0.01);   //Changes unequipped item version tex as well
			transform.localScale += Vector3(0,0,0.1) * curDurability * 0.001;      		   //Scale unequipped item 
			
			magicAxe = GameObject.Find("Melee/magicAxeWeapon");
						
			magicAxe.transform.renderer.material.SetFloat("_Blend", curDurability * 0.01);  //The lower the durability, the darker the color
			magicAxe.transform.localScale += Vector3(0,0,0.1) * curDurability * 0.001;     //SCALE EQUIPPED ITEM
			}
}

function Update(){

	if (Time.timeScale == 0.0){	 //If time paused, do nothing. Prevents updating things that ignore timescale, like scaling transforms.
	}
	else{
		durabilityEffects();
	}	
}
function EquipmentEffectToggle(effectIs : boolean){	//RUN WHEN OBJECT IS ON CHARACTER SHEET

	if (effectIs == true){
		effectActive = true;
		playerStats.maxHealth += 400;
		
		//-----> THIS IS WHERE YOU INSERT CODE YOU WANT TO EXECUTE JUST WHEN THE ITEM IS EQUIPPED. <-----	
	}
	else{
		effectActive = false;
		playerStats.maxHealth -= 400;
		//-----> THIS IS WHERE YOU INSERT CODE YOU WANT TO EXECUTE JUST WHEN THE ITEM IS UNEQUIPPED. <-----
	}
}

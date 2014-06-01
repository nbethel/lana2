#pragma strict
//This script allows you to create equipment effects that will be called either OnEquip or WhileEquipped. This is usefull for magic effects and stat handling.
@script AddComponentMenu ("Inventory/Items/Equipment Effect")
@script RequireComponent(Item)

var effectActive = false;

private var texChangeRate : float = 0.1;
private var sizeChangeRate : float = 0.1;

private var magicAxe : GameObject;

var theTimer : float = 0.0;
var theStartTime : float = 100.0;

function Start(){
theTimer = theStartTime;
}       

function durabilityEffects(){
	//-----> THIS IS WHERE YOU INSERT CODE YOU WANT TO EXECUTE AS LONG AS THE ITEM IS EQUIPPED. <-----	
		
	if(effectActive == true){   					//RUN WHEN OBJECT IS IN HAND
		theTimer -= Time.deltaTime;

		if (theTimer <= 0){
			theTimer = 0;
		}
		transform.renderer.material.SetFloat("_Blend", theTimer * texChangeRate);   //Changes unequipped item version tex as well
		transform.localScale += Vector3(0,0,0.005) * theTimer * sizeChangeRate;      		   //Scale unequipped item 
					
		magicAxe = GameObject.Find("Melee/magicAxeWeapon");
								
		magicAxe.transform.renderer.material.SetFloat("_Blend", theTimer * texChangeRate);  //The lower the durability, the darker the color
		magicAxe.transform.localScale += Vector3(0,0,0.005) * theTimer * sizeChangeRate;     //SCALE EQUIPPED ITEM
		}
}
function OnTriggerStay (col : Collider){
	if(col.gameObject.tag == "Shade"){
		print("in shade");
		effectActive = false;
	}
}
function OnTriggerExit (col : Collider){
	if(col.gameObject.tag == "Shade"){
		print("no shade");
		effectActive = true;
	}
}
function Update(){

    if ( Input.GetKeyUp(KeyCode.G) ){  //Reset time
        theTimer = theStartTime;
    }
    
    if ( Input.GetKeyUp(KeyCode.C) ){  //Reset time
        theTimer = 10.0;
    }
    
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


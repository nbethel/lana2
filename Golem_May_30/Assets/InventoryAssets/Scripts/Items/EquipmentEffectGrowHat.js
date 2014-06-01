#pragma strict
//This script allows you to create equipment effects that will be called either OnEquip or WhileEquipped. This is usefull for magic effects and stat handling.
@script AddComponentMenu ("Inventory/Items/Equipment Effect")
@script RequireComponent(Item)

var effectActive = false;

private var texChangeRate : float = 0.1;
private var sizeChangeRate : float = 0.1;

private var plantHat : GameObject;

var theTimer : float = 0.0;
var theStartTime : float = 10.0;

var itemOut : boolean = false;
var inShade : boolean;

var forestCamoAmount : int = 5;

function Start(){
	theTimer = theStartTime; 
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

function durabilityEffects(){
	//-----> THIS IS WHERE YOU INSERT CODE YOU WANT TO EXECUTE AS LONG AS THE ITEM IS EQUIPPED. <-----	
	if(effectActive == true){   					//RUN WHEN OBJECT IS IN HAND
		theTimer -= Time.deltaTime;

		if (theTimer <= 0){
			theTimer = 0;
		}
		transform.renderer.material.SetFloat("_Blend", theTimer * texChangeRate);   //Changes unequipped item version tex as well
		transform.localScale += Vector3(0,0.005,0) * theTimer * sizeChangeRate;      		   //Scale unequipped item 
								
		plantHat = GameObject.Find("Chest/growingPlantHatEquipped");
		plantHat.transform.renderer.material.SetFloat("_Blend", theTimer * texChangeRate);  //The lower the durability, the darker the color
		plantHat.transform.localScale += Vector3(0.005,0,0) * theTimer * sizeChangeRate;     //SCALE EQUIPPED ITEM
	}	
}

	function OnTriggerEnter (col : Collider){
		
		if(col.gameObject.tag == "Shade"){
			inShade = true;
			effectActive = false;
		}
		if( (col.gameObject.tag == "Shade") && (plantHat == null) ){ //Effect not active if can't find referenced object
			inShade = true;
		}
	}
	
	function OnTriggerExit ( col : Collider ){
		
		if( (col.gameObject.tag == "Shade") ){
			inShade = false;
			
			if (itemOut == true){
				effectActive = true;
			}
		}
		if( (col.gameObject.tag == "Shade") && (plantHat == null) ){ //Effect not active if can't find referenced object
			inShade = false;
		}
	}
	   
	if (itemOut == true){
		effectActive = true;
	}   
	if (itemOut == false){
		effectActive = false;
	}
					
function EquipmentEffectToggle(effectIs : boolean){	//RUN WHEN OBJECT IS ON CHARACTER SHEET
	
	if (effectIs == true){
	
		itemOut = true;
		playerStats.maxHealth += 400;
		
		camouflage.curForestCamo += forestCamoAmount;
	}
	
	if ( (effectIs == true) && (inShade == false) ){
		effectActive = true;
	}
	
	if (effectIs == false){
	
		itemOut = false;
		effectActive = false;
		playerStats.maxHealth -= 400;
		
		camouflage.curForestCamo -= forestCamoAmount;
	}
}


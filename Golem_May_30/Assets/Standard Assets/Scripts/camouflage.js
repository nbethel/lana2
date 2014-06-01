#pragma strict

var camoText : GUIText;

public static var maxCamo : float = 100;

static var curForestCamo : float = 0;  //Items add camo value to this variable
public var forestCamo : float = 0;	   //AIs read this value to determine camo amount

static var curPlainsCamo : float = 0;  //Items add camo value to this variable
public var plainsCamo : float = 0;	   //AIs read this value to determine camo amount

static var curCaveCamo : float = 0;  //Items add camo value to this variable
public var caveCamo : float = 0;	 //AIs read this value to determine camo amount

var testForestCamo : float = 0;  //For changing/testing camo type in runtime 
var testPlainsCamo : float = 0;  //For changing/testing camo type in runtime 
var testCaveCamo   : float = 0;  //For changing/testing camo type in runtime 


function Update(){
	
	if(ThirdPersonController.IsHiding == true){ //If hiding, full camo in effect. 
		//Camoflage types
		forestCamo = curForestCamo + testForestCamo;
		plainsCamo = curPlainsCamo + testPlainsCamo;
		caveCamo   = curCaveCamo   + testCaveCamo;
			
		if(forestCamo < 0){
			forestCamo = 0;
		}
		if(forestCamo > maxCamo){
			forestCamo = maxCamo;
		}
		if(plainsCamo < 0){
			plainsCamo = 0;
		}
		if(plainsCamo > maxCamo){
			plainsCamo = maxCamo;
		}
		if(caveCamo < 0){
			caveCamo = 0;
		}
		if(caveCamo > maxCamo){
			caveCamo = maxCamo;
		}
	}
	else if (ThirdPersonController.IsSneaking == true){
		forestCamo = curForestCamo / 4 + testForestCamo / 4;  //Camo less effective if sneaking
	}
	else{
		forestCamo = 0;	//If not hiding, no camo (unless sneaking)
		plainsCamo = 0;
		caveCamo   = 0;
	}
	//Display camo amounts (only for test builds)
	camoText.text = "Forest Camo = " + forestCamo + " / " + maxCamo + "\nCave Camo = " + caveCamo + " / " + maxCamo;
}




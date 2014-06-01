#pragma strict

// Tanning and color variables
                                 
private var golemMesh : GameObject;
private var golemMeshHead : GameObject;

var tanColor : Color;
var burnColor : Color;

var gainTanRate : float = 20;
var gainBurnRate : float =10;
var loseTanRate : float = 40;
var loseBurnRate : float =10;
static var tan : float = 0; 			// lerp control variable for tan
static var burn : float = 0; 			// lerp control variable for burn

//var wear  : float = playerStats.level * 0.1;
                                                                                                                                                                                                                                                                                                                                                                                                                            
function Start(){
	golemMesh = GameObject.Find("golemMesh");
	golemMesh.renderer.material.color = Color.white;
	
	golemMeshHead = GameObject.Find("golemMesh");
	golemMeshHead.renderer.material.color = Color.white;
}

function OnTriggerStay (col : Collider){
	//You untan in the shade 
	if(col.gameObject.tag == "Shade"){
		//If you have a burn, decrease to max tan
		golemMesh.renderer.material.color = Color.Lerp(burnColor, tanColor, burn);
		golemMeshHead.renderer.material.color = Color.Lerp(burnColor, tanColor, burn);		
			
			if (burn > 0){							// while t below the end limit...
				burn -= Time.deltaTime/loseBurnRate; 	// increment it at the desired rate every update
			}
		//Else just lose tan
		else{
			golemMesh.renderer.material.color = Color.Lerp(tanColor, Color.white, tan);
			golemMeshHead.renderer.material.color = Color.Lerp(tanColor, Color.white, tan);	
				if (tan > 0){							// while t below the end limit...
					tan -= Time.deltaTime/loseTanRate; 	// increment it at the desired rate every update
				}
		}	
	}
}
//SLOW TAN RATES WHEN ENTERING SHADE, CANCEL SLOWNESS WHEN LEAVING SHADE
function OnTriggerEnter (col : Collider){
	//You untan in the shade (make this slow later)
	if(col.gameObject.tag == "Shade"){
		gainTanRate += 1000;
		gainBurnRate += 1000;	
	}
	
	if(col.gameObject.tag == "Mud"){		
	}
	
	if(col.gameObject.tag == "RoughWater"){
	}
	
}
function OnTriggerExit (col : Collider){
	//You untan in the shade (make this slow later)
	if(col.gameObject.tag == "Shade"){
		gainTanRate -= 1000;
		gainBurnRate -= 1000;	
	}
}		
function Update(){

	var wear = playerStats.level * 0.1;		// As the player levels, the level of wear rises
	if (tan < 1){							// while t below the end limit...
		tan += Time.deltaTime/gainTanRate; 	// increment it at the desired rate every update
	}

	if (playerStats.form1 == true){
		golemMesh = GameObject.Find("golemMesh"); //******************Don't want this Updating every frame though..
		golemMesh.renderer.material.SetFloat("_Blend", wear);
		
		//You tan by default (make this fast later)
		golemMesh.renderer.material.color = Color.Lerp(Color.white , tanColor, tan);
		
		//When tan is higher or equal to 1, start burn
		if (tan >= 1){	
			golemMesh.renderer.material.color = Color.Lerp(tanColor , burnColor, burn);
			if (burn < 1){						// while t below the end limit...
				burn += Time.deltaTime/gainBurnRate; 	// increment it at the desired rate every update
			}
		}
	}
	
	if (playerStats.form2 == true){
		golemMeshHead = GameObject.Find("golemMeshHead"); //******************Don't want this Updating every frame though..
		golemMesh = GameObject.Find("golemMesh"); //******************Change this?...
		golemMeshHead.renderer.material.SetFloat("_Blend", wear);
	
		golemMeshHead.renderer.material.color = Color.Lerp(Color.white , tanColor, tan);
		golemMesh.renderer.material.color = Color.Lerp(Color.white , tanColor, tan);
		
		//When tan is higher or equal to 1, start burn
		if (tan >= 1){	
			golemMeshHead.renderer.material.color = Color.Lerp(tanColor , burnColor, burn);
			golemMesh.renderer.material.color = Color.Lerp(tanColor , burnColor, burn);		
			if (burn < 1){						// while t below the end limit...
				burn += Time.deltaTime/gainBurnRate; 	// increment it at the desired rate every update
			}
		}	
	}
}
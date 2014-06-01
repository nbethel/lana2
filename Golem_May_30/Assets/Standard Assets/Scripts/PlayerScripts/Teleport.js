var target : Transform; 
var target2 : Transform;
var target3 : Transform;
var store1 : Transform;


function OnTriggerEnter (col : Collider){

	if(col.gameObject.tag == "teleport"){  //Teleport to random location
		
		var randomNumber = Random.Range(0,3);
		print(randomNumber);
		
		if(randomNumber == 0){
			this.transform.position = target.position;
		}
		
		
		if(randomNumber == 1){
			this.transform.position = target2.position;
		}
		
		
		if(randomNumber == 2){
			this.transform.position = target3.position;
		}	
	}

	if(col.gameObject.tag == "shop"){ //Teleport to shop
	teleportToShop();
	}
}
	
	
function teleportToShop(){

var fade = GameObject.FindWithTag("Player");
GetComponent("CharacterController").enabled = false;
fade.GetComponent(fadeScript).fadeOut();

yield WaitForSeconds(1);

this.transform.position = store1.position;
fade.GetComponent(fadeScript).fadeIn();
yield WaitForSeconds(2);
GetComponent("CharacterController").enabled = true;
}



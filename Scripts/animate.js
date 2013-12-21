#pragma strict

var treasureChest : GameObject; //treasure chest prefab goes here
 
function OnTriggerEnter (col : Collider) {
	 
	if(col.gameObject.tag == "Spirit") { //checks to see that our character controller with tag "Player" has entered the trigger
	treasureChest.animation.Play(); //plays the default animation applied to our treasureChest model
	}
}
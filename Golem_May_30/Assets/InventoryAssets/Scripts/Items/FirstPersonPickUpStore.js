#pragma strict

//Assign this script to an Item if you want to pick it up in First Person. If this script is not attached the Item can only be picked up when clicking on it with the mouse.

var InstructionBoxSkin : GUISkin; //The skin to use. Default one is 'OtherSkin' under the 'Resources' folder.
var ButtonToPress : KeyCode = KeyCode.E; //The button to press when picking up the item.
var PickUpDistance = 1.7f; //The distance from where the Item can be picked up. Remember that this is relative to the center of the Item and the center of the Player.

//These store information about the Item, if we can pick it up, the Player and the distance to the Player.
private var canPickUp = false;
private var theItem : Item;
private var thePlayer : Transform;
private var dist = 9999f;

var ItemName : String;

var hit : RaycastHit;

var script : FirstPersonPickUpStore;

@script AddComponentMenu ("Inventory/Items/First Person Pick Up")
@script RequireComponent(Item)

//This is where we find the usefull information which we can later access.
function Awake (){
	theItem = (GetComponent(Item));
	
	
	if (InstructionBoxSkin == null){
		InstructionBoxSkin = Resources.Load("OtherSkin", GUISkin);
	}
}

function Start(){
	script = GetComponent(FirstPersonPickUpStore); 
}

function RetrievePlayer (theInv : Inventory){
	thePlayer = theInv.transform.parent;
}

function OnGUI(){
	//This is where we draw a box telling the Player how to pick up the item.
	GUI.skin = InstructionBoxSkin;
	GUI.color = Color(1, 1, 1, 0.7);
	
	if (canPickUp == true){
		if (transform.name.Length <= 7){
			GUI.Box (Rect (Screen.height * 0.5 -(165 * 0.5), 200, 165, 22), "Press E to pick up " + ItemName + "."); //ItemName was Transform.name
		}
		else{
			GUI.Box (Rect (Screen.width * 0.5 -(185 * 0.5), 200, 185, 22), "Press E to pick up " + ItemName + ".");
		}
	}
}
function Update (){

	if (thePlayer != null){
		//This is where we enable and disable the Players ability to pick up the item based on the distance to the player.
		dist = Vector3.Distance(thePlayer.position, transform.position);
		
		if (dist <= PickUpDistance && collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit, Mathf.Infinity)){
			canPickUp = true;
			theItem.canGet = true;  //Set Can Get on item script false so this works properly.
		}
		else{
			canPickUp = false;
			theItem.canGet = false;
		}
		
		//This is where we allow the player to press the ButtonToPress to pick up the item.
		if (Input.GetKeyDown(ButtonToPress) && canPickUp == true){
			theItem.PickUpItem();
			
			//Unfreeze position and rotation
			rigidbody.constraints = RigidbodyConstraints.None;
			
			script.enabled = false;
		}
	}	
}
//This is just for drawing the sphere in the scene view for easy testing.
function OnDrawGizmosSelected(){
	Gizmos.color = Color.yellow;
	Gizmos.DrawWireSphere (transform.position, PickUpDistance);
}
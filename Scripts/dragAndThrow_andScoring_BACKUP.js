#pragma strict

//Score System
var score = 0;
var scoreText = "Score: 0";
var mySkin : GUISkin;

var normalCollisionCount = 1;
var spring = 100.0;
var damper = 5.0;
var drag = 10.0;
var angularDrag = 5.0;
var distance = 0.2;
var throwForce = 500;
var throwRange = 1000;
var attachToCenterOfMass = false;
var reach : float = 5.0;

var sensitivityX:float = 15;
var sensitivityY:float = 15;
         
private var springJoint : SpringJoint;
 
function Update (){

	// Make sure the user pressed the mouse down
	if (!Input.GetMouseButtonDown (0))
		return;
	var mainCamera = FindCamera();
 
	// We need to actually hit an object
	var hit : RaycastHit;
	if (!Physics.Raycast(mainCamera.ScreenPointToRay(Input.mousePosition),  hit, reach))
		return;	
	// We need to hit a rigidbody that is not kinematic
	if (!hit.rigidbody || hit.rigidbody.isKinematic)
		return;	
	if (!springJoint){
		var go = new GameObject("Rigidbody dragger");
		var body : Rigidbody = go.AddComponent ("Rigidbody") as Rigidbody;
		springJoint = go.AddComponent ("SpringJoint");
		body.isKinematic = true;
	}
 
	springJoint.transform.position = hit.point;
	if (attachToCenterOfMass){
		var anchor = transform.TransformDirection(hit.rigidbody.centerOfMass) + hit.rigidbody.transform.position;
		anchor = springJoint.transform.InverseTransformPoint(anchor);
		springJoint.anchor = anchor;
	}
	else{
		springJoint.anchor = Vector3.zero;
	}
 
	springJoint.spring = spring;
	springJoint.damper = damper;
	springJoint.maxDistance = distance;
	springJoint.connectedBody = hit.rigidbody;
   	
	StartCoroutine ("DragObject", hit.distance);
} //End Update
 
function DragObject (distance : float){
	var oldDrag = springJoint.connectedBody.drag;
	var oldAngularDrag = springJoint.connectedBody.angularDrag;
	springJoint.connectedBody.drag = drag;
	springJoint.connectedBody.angularDrag = angularDrag;
	var mainCamera = FindCamera();
	
	while (Input.GetMouseButton (0)){ //LEFT CLICK
		var ray = mainCamera.ScreenPointToRay (Input.mousePosition);
		springJoint.transform.position = ray.GetPoint(distance);	
		yield;
		
		/*
		if (Input.GetKeyDown(KeyCode.E)){ //E KEY (WHILE HOLDING LEFT CLICK)
			print("PRESSED EEEE");
			springJoint.transform.Rotate(0,10,0);
		}
		*/
		
		if (Input.GetMouseButton (1)){ //RIGHT CLICK (WHILE HOLDING LEFT CLICK)
		    springJoint.connectedBody.AddExplosionForce(throwForce,mainCamera.transform.position,throwRange);
		    springJoint.connectedBody.drag = oldDrag;
		    springJoint.connectedBody.angularDrag = oldAngularDrag;
		    springJoint.connectedBody = null;
		}
		
		if (Input.GetKeyDown(KeyCode.E)){ //E KEY (WHILE HOLDING LEFT CLICK)
		    springJoint.connectedBody.AddExplosionForce(throwForce,mainCamera.transform.position,throwRange);
		    springJoint.connectedBody.drag = oldDrag;
		    springJoint.connectedBody.angularDrag = oldAngularDrag;
		    springJoint.connectedBody = null;
		}
		
	}
	
	if (springJoint.connectedBody){
		springJoint.connectedBody.drag = oldDrag;
		springJoint.connectedBody.angularDrag = oldAngularDrag;
		springJoint.connectedBody = null;
	}
}
 
function FindCamera(){
	if (camera)
		return camera;
	else
		return Camera.main;
}

//COINS
function OnTriggerEnter( other : Collider ){
	if (other.tag == "Coin") {  		//Objects tagged "Coin" do these things
		score += 1;
		scoreText = "Score: " + score;  //Score + 1
		Destroy(other.gameObject);  	//Destroy tagged objects
		if ((score%3 == 0) && (score != 0)){
			print ("You feel stronger");
			spring += 200;
			throwForce += 900;
		} 
	}
	
	if ((other.tag == "NeedPower3") && (score > 2)) {  
	 	print ("Have at least 3 points. Unlocked");
	 	Destroy(other.gameObject);
	}
}
    
function OnGUI (){
    GUI.skin = mySkin;
    GUI.Label (Rect (10, 10, 500, 200), scoreText.ToString()); 
}
#pragma strict

var score = 0;
var scoreText = "Score: 0";
var mySkin : GUISkin;

var normalCollisionCount = 1;
var spring = 50.0;
var damper = 5.0;
var drag = 10.0;
var angularDrag = 5.0;
var distance = 0.2;
var throwForce = 500;
var throwRange = 1000;
var attachToCenterOfMass = false;

private var springJoint : SpringJoint;


function FindCamera (){
	if (camera)
		return camera;
	else
		return Camera.main;
}

function Update (){
	if (!Input.GetMouseButtonDown (0))
		return;
	var mainCamera = FindCamera();

	var hit : RaycastHit;
	if (!Physics.Raycast(mainCamera.ScreenPointToRay(Input.mousePosition),  hit, 100))
		return;

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
}


function DragObject (distance : float){
	var oldDrag = springJoint.connectedBody.drag;
	var oldAngularDrag = springJoint.connectedBody.angularDrag;
	springJoint.connectedBody.drag = drag;
	springJoint.connectedBody.angularDrag = angularDrag;
	var mainCamera = FindCamera();
	while (Input.GetMouseButton (0))
	{
		var ray = mainCamera.ScreenPointToRay (Input.mousePosition);
		springJoint.transform.position = ray.GetPoint(distance);
		yield;
 
		if (Input.GetMouseButton (1)){
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

//COINS
function OnTriggerEnter( other : Collider ){
	if (other.tag == "Coin") {  		//Objects tagged "Coin" do these things
		score += 1;
		scoreText = "Score: " + score;  //Score + 1
		Destroy(other.gameObject);  	//Destroy tagged objects
	}
	if ( score > 2 ){
		print ("You feel stronger");
		spring = 200;
	}  
}
    
function OnGUI (){
    GUI.skin = mySkin;
    GUI.Label (Rect (10, 10, 500, 200), scoreText.ToString()); 
}
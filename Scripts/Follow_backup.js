#pragma strict

var target : Transform;
var moveSpeed = 0;
var rotationSpeed = 3;
var player : Transform;
var distance: float = 5.8;
var distanceAttack: float = 2.6;
var myTransform : Transform;

private var controller : CharacterController;


function Start(){
	controller = GetComponent(CharacterController);
}


function Update () {

	if(Vector3.Distance(transform.position, player.position) < distance){ //See target
	if(Vector3.Distance(transform.position, player.position) >distanceAttack){ 
	moveSpeed = 2;
	
	myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
	Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
	controller.Move(myTransform.forward * moveSpeed * Time.deltaTime);
	}
	 
	if(Vector3.Distance(transform.position, player.position) < distanceAttack){ //Close to target
	moveSpeed = 0;
	//Debug.Log("I'm attacking you!");	
		}
	}
	
		else{
		
		}
} 	
   	
   	
  
   	
   	
	/////////////////////   Move Per Frame  ///////////////
	
	/*
	var translation : float = Time.deltaTime * 10;
	//transform.Translate (0, translation, translation);
	controller.Move (myTransform.forward * translation * Time.deltaTime);
	*/



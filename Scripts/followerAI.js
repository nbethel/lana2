#pragma strict

var target : Transform;
var rotationSpeed = 3;
var player : Transform;
var distance: float = 5.8;
var distanceStop: float = 2.6;
var myTransform : Transform; 

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;

/////
var isJumping: boolean = false;


function MyWaitFunction (delay : float) {
    var timer = Time.time + delay;
    while (Time.time < timer) {
        yield;
    }
}

        
function Jump(){
	moveDirection = Vector3(0, Input.GetAxis("Vertical"));
	moveDirection.y = jumpSpeed;
}     

                                                                    
function Start(){
	controller = GetComponent(CharacterController);
}
 
 
function Update () {

	moveDirection.y -= gravity * Time.deltaTime;
	
	
	/*
	////HOP!////
	if (controller.isGrounded) {
				light.enabled = !light.enabled; 
				// or Jump();
				moveDirection = Vector3(0, Input.GetAxis("Vertical"));
				moveDirection.y = jumpSpeed;
			}	

	*/


	////Wait until target is near////
	if(Vector3.Distance(transform.position, player.position) < distance){

		////If target is close, go to and lookat target////
		if(Vector3.Distance(transform.position, player.position) >distanceStop){
			speed = 2;
			//Look at target
			myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
			Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
			//Move to target
			controller.Move(myTransform.forward * speed * Time.deltaTime);
			controller.Move(moveDirection * Time.deltaTime);
		}
					
		////When really close to target///	
		if(Vector3.Distance(transform.position, player.position) < distanceStop){
			speed = 0;
		}
	}
		
} 
   	  
   			//Gravity
			//moveDirection.y -= gravity * Time.deltaTime;	
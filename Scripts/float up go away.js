#pragma strict

var target : Transform;
var rotationSpeed = 3;
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
	
	moveDirection = Vector3(0, Input.GetAxis("Vertical"));
	moveDirection.y = jumpSpeed;

	////Wait until target is near////
	if(Vector3.Distance(transform.position, target.position) < distance){

		////Go to and lookat target////
		if(Vector3.Distance(transform.position, target.position) >distanceStop){
			speed = 2;
			myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
			Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
			controller.Move(myTransform.forward * speed * Time.deltaTime);
			controller.Move(moveDirection * Time.deltaTime);
		}
					
		////When really close to target///	
		if(Vector3.Distance(transform.position, target.position) < distanceStop){
			speed = 0;
			print("I see");		
		/*		
		////Really close and grounded/////			
			if (controller.isGrounded) {
				light.enabled = !light.enabled; 
				// or Jump();
				moveDirection = Vector3(0, Input.GetAxis("Vertical"));
				moveDirection.y = jumpSpeed;
			}	
		*/
		
		
		}
	}
		
} 
   	  
   			//Gravity
			//moveDirection.y -= gravity * Time.deltaTime;	
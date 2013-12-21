var jumpSpeed = 10;
var controller;
var gravity = 10.00;
var isJumping: boolean = false;
var Jump : boolean = false;
private var moveDirection : Vector3 = Vector3.zero; 

////////////////////////
var interval : float = 1;
private var timeLeft : float;
timeLeft = interval;
////////////////////////

//////////Function not needed?///////////
function MyWaitFunction (delay : float){
    var timer = Time.time + delay;
    while (Time.time < timer){
    yield;
    }
}
/////////////////////////////////////////
function wait(){
yield WaitForSeconds (1);
}
 
function Update (){

	var controller : CharacterController = GetComponent(CharacterController);

		if (controller.isGrounded){
			isJumping = false;
		}	
		if (Jump){
	    	isJumping = true;
	    }		
		if (isJumping){
	    	Jump = true;
	    	controller.Move(moveDirection * Time.deltaTime);   	
	    }	
	    
//////////////Apply gravity/////////////////////////	            
	moveDirection.y -= gravity * Time.deltaTime;
	
/////////////////////JUMPING////////////////////////
	timeLeft -= Time.deltaTime;
	
		if (timeLeft < 0.0){ 
			timeLeft = 1;
		if (controller.isGrounded) {    
			wait();
			Jump = true;
	        moveDirection.y = jumpSpeed;
 
	        light.enabled = true;
	    } 
			 else{
			 	isJumping = false;			 	
			 	light.enabled = false;
		        }    
	}	
}	
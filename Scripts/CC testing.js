#pragma strict

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
private var moveDirection : Vector3 = Vector3.zero;
	
function Update() {
	var controller : CharacterController = GetComponent(CharacterController);
	//Gravity
	moveDirection.y -= gravity * Time.deltaTime;

	controller.Move(moveDirection * Time.deltaTime);


	if (controller.isGrounded) {			
		
		light.enabled = !light.enabled; 
		//Jump
		moveDirection = Vector3(0, Input.GetAxis("Vertical"));
		moveDirection.y = jumpSpeed;
		
		//moveDirection = transform.TransformDirection(moveDirection);
		//moveDirection *= speed;
	}	
}
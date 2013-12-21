
#pragma strict
var target : Transform;
var rotationSpeed = 3;
var distance: float = 0.0;
var distanceStop: float = 0.0;
var myTransform : Transform; 
var speed : float = 8.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
private var moveDirection : Vector3 = Vector3.zero;
var wayPoint : Vector3;
var Range= 10;
var close_flag : boolean = false;

//var Wander : boolean = true;
//var waypointing : boolean = false;

function Wander(){
	wayPoint=  Vector3(Random.Range(transform.position.x - Range, transform.position.x + Range), 1 , Random.Range(transform.position.z - Range, transform.position.z + Range));
	wayPoint.y = 4; ///*******change to transform's Y position
	
	myTransform.LookAt(wayPoint);
	
}

function goForward(){
	var controller : CharacterController = GetComponent(CharacterController);
	controller.Move(myTransform.forward * speed * Time.deltaTime);  //MOVE 
	controller.Move(moveDirection * Time.deltaTime); 			    //MOVE
}

function Start(){
	Wander();
}						
																		
function Update() {
	var controller : CharacterController = GetComponent(CharacterController); //might not need to be initiallized everytime, move intiallization to outside functions

	moveDirection.y -= gravity * Time.deltaTime;	 //Gravity //might not need to be set everytime, unless gravity changes
	controller.Move(moveDirection * Time.deltaTime); //Needed for gravity. Maybe.
	
//////////////////////FOLLOWING///////////////////////////////////
	if(Vector3.Distance(transform.position, target.position) > distance){  //When target's far away
		print("WHERE ARE YOU???");
		if (close_flag) {
			Wander();
			close_flag=false;
		}
		//bug may be here, need to update wayPoint
		goForward();
		if((myTransform.position - wayPoint).magnitude < 5){  //When at waypoint 
			Wander();
			print("Waypoint reached");
		}	
  	}	
  	
	if(Vector3.Distance(transform.position, target.position) < distance){ //See target
		if (!close_flag) {
			close_flag=true;
		}
		if(Vector3.Distance(transform.position, target.position) > distanceStop){ 			
			//Look at target
			myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
			Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
			speed = 1;
			print("approaching you");
			controller.Move(myTransform.forward * speed * Time.deltaTime);
			controller.Move(moveDirection * Time.deltaTime); // not sure why this is here, 
		}
	
		if(Vector3.Distance(transform.position, target.position) < distanceStop){ //Really close to target
			print("REALLY CLOSE");
			speed = 0;
			//Look at target
			myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
			Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
			//When grounded, jump for joy
			if (controller.isGrounded) {   	
				moveDirection = Vector3(0, Input.GetAxis("Vertical"));
				moveDirection.y = jumpSpeed;
			}			
		}																																									
	}
}

/*  PUT THIS IN LATER TO JUMP AT WAYPOINTS
if (controller.isGrounded) {	//Jump when grounded		
				moveDirection = Vector3(0, Input.GetAxis("Vertical"));
				moveDirection.y = jumpSpeed;
			}
*/
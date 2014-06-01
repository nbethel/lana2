
var degrees = 10;
var target : Transform;

function Update() {

	//this.transform.position.x = target.transform.position.x + 20;
	 
	//this.transform.position.y = target.transform.position.y + 20;
	 
	//this.transform.position.z = target.transform.position.z;

	transform.RotateAround (target.position, Vector3.up, degrees);
	transform.RotateAround (target.position, Vector3.forward, degrees);
}
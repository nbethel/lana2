
var ObjToShake : Transform;
var shakeAmount = 0.1; 
 
function Update() {
 
	var randNrX = Random.Range(shakeAmount,-shakeAmount);
	 
	var randNrY = Random.Range(shakeAmount,-shakeAmount);
	 
	var randNrZ = Random.Range(shakeAmount,-shakeAmount);
	 
	ObjToShake.transform.position += Vector3(randNrX,randNrY,randNrZ);
}
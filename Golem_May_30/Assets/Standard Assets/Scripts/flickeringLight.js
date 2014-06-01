 
var brightness : float = 1; 
 
function Start() {

	flickerLight();
}
 
function Update () {
}
   
function flickerLight() {
 
	for (var x = brightness; x > 0; x++) {

		yield WaitForSeconds(1);
		gameObject.light.intensity += brightness;
		yield WaitForSeconds(1);
		gameObject.light.intensity = 0;
	} 
}
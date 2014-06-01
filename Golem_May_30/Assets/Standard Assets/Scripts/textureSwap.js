var texture1 : Texture2D;
var texture2 : Texture2D;

function Start(){

	changeTexture();

}

function Update(){

}

function changeTexture(){

	for(i=1; i>0; i++){
	
	yield WaitForSeconds(0.5);
	
	renderer.material.mainTexture = texture1;
	
	yield WaitForSeconds(0.5);
	
	renderer.material.mainTexture = texture2;
	
	}

}
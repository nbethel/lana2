var alpha : float = 0;
 
function Start () {
	//ChangeAlpha();
}

function OnTriggerEnter (col : Collider){ 

	if(col.gameObject.tag == "Player"){
	
		ChangeAlpha();
	}
}

function ChangeAlpha(){

	for(i=1; i>0; i++) {
	 
	yield WaitForSeconds(0.05);
	 
	alpha += 0.05;
	 
	renderer.material.SetFloat("_Cutoff", alpha);
	} 
}
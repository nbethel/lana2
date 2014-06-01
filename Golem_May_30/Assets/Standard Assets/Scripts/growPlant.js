
var alpha : float = 0;	//Plant length
var growPlant : boolean = true;
private var growRate : float = 0.0005;


function growPlanty(){

	for(i=1; i>0; i++) {
		 
		yield WaitForSeconds(0.05);
		 
		alpha += growRate;
		 
		renderer.material.SetFloat("_FurLength", alpha);
		
		if (alpha > 4.0){
			alpha = 4.0;
		}
	}
}

function Update(){
	growPlanty();
}

if (growPlant == true){
	
	for(i=1; i>0; i++) {
		 
		yield WaitForSeconds(0.05);
		 
		alpha += growRate;
		 
		renderer.material.SetFloat("_FurLength", alpha);
		
		if (alpha > 4.0){
			alpha = 4.0;
		}
	}
}

function OnTriggerEnter (col : Collider){
	if(col.gameObject.tag == "Shade"){
		print("in shade");
		growPlant = false;
		growRate = 2.0;
		
	}
}
function OnTriggerExit (col : Collider){
	if(col.gameObject.tag == "Shade"){
		print("no shade");
		growPlant = true;
		growRate = 0.0005;
	}
}
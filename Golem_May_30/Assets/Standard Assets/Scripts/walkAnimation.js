
function Awake(){
	//animation.Play("sillyWalk");
}

function Update(){
	
	if(Input.GetKeyDown("w") || Input.GetKeyDown("up")){ 
		animation.Play("sillyWalk");
	}
	
	if(Input.GetKeyUp("w") || Input.GetKeyUp("up")){ 
		animation.Stop();
		//animation.Play("idle");
	}
}

private var scroll : float = 0.2; // scrolling velocity private var duration: float = 1.5 //time to die private var alpha: float;
private var alpha : float = 4.00;
private var duration : float = 0.3; 

function start(){

	guiText.material.color = Color(1,1,1,1.0);
	alpha = 1;
}

function Update(){

	if (alpha>0){
		transform.position.y += scroll*Time.deltaTime;
		alpha -= Time.deltaTime/duration;
		guiText.material.color.a = alpha;		
	}
	else{
		Destroy(transform.gameObject);
	}
}
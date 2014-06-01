
var bounceSpeed : float = 0.1f;
var changeDirection : float = 1.5; 
var itemBounceUp = true;
 
function Start(){
itembounce();
}
function Update(){

	if (Time.timeScale == 0.0){	 //If time paused, do nothing. Prevents updating things that ignore timescale, like scaling transforms.
	}
	
	else{  //Only move up and down when time is not paused
		if(itemBounceUp == true) {
			this.transform.position.y += bounceSpeed;
		}
		else if(itemBounceUp == false){
			this.transform.position.y -= bounceSpeed; 
		}
	}
}
function itembounce(){
	for(i=1;i>0;i++){
		yield WaitForSeconds(changeDirection);
		itemBounceUp = false;
		yield WaitForSeconds(changeDirection);
		itemBounceUp = true;
	} 
}
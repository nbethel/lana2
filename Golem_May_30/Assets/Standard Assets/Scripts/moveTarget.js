var target1 : Transform; 
var target2 : Transform;
var target3 : Transform;


function OnTriggerEnter (col : Collider){

	if(col.gameObject.tag == "enemy"){  //Teleport to random location
		
		var randomNumber = Random.Range(0,3);
		print(randomNumber);
		
		if (randomNumber == randomNumber){
			print("SAME NUMBER");
		}
		
		if(randomNumber == 0){
			this.transform.position = target1.position;
		}
		
		
		if(randomNumber == 1){
			this.transform.position = target2.position;
		}
		
		
		if(randomNumber == 2){
			this.transform.position = target3.position;
		}	
	}
	
}
	
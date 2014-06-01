
var score1 : GUIText;
var myScore : int = 0;
var myCurScore : int = 500;
 
function Update () {
 
	score1.text = "Score: " + myScore;
	  
	if(myScore < myCurScore) {  	//Score scroll speed
		//myScore += 10;
		myScore ++;
	}
	 
	if(Input.GetKeyDown("f")) { 
		myCurScore += 100; 			//Add points
	}
}
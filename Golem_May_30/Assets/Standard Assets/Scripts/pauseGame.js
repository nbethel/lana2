
var paused : boolean = false;

function Update (){
    if(Input.GetKeyDown("p") && paused == false){
				
	   paused = true;
	   Time.timeScale = 0;
   }
   
   else if(Input.GetKeyDown("p") && paused == true){
   
   paused = false;
   Time.timeScale = 1;
   }
}
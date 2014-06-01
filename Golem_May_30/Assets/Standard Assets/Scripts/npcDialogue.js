
var hit : RaycastHit;
static var shopOpen : boolean = false;

var onetime = false;

var commentTan : String;
var Player : Transform;

//--------------------------------------------------
var letterPause = 0.08;
private var word : String; // change this one in the inspector
private var currentWord = "";
	
function AddText(newText : String){
    word = newText;
    TypeText(word);
}

private function TypeText (compareWord : String){
    for (var letter in word.ToCharArray()){
        if (word != compareWord) break;
        currentWord += letter;
        yield WaitForSeconds (letterPause);
        //for added fun, use this instead :D ...
        //yield WaitForSeconds(letterPause * Random.Range(0.5, 2));
    }   
}
//--------------------------------------------------

function Start(){
}

function OnGUI(){

	if(shopOpen == true){
		
		GUI.Box(new Rect(10, 270, 260, 70), currentWord);
		//GUI.Box(new Rect(10, 200, 260, 70), "This is the shop." + "\n" + "Yada yada yada."); 

	  	if(GUI.Button(Rect(10,130,130,30),"See ya.")){
	  	shopOpen = false;
	  	
	  	currentWord = "";
	  	onetime = false;
	  }
	  
	  	//-----------------------
		if(Input.GetKeyDown("r")){
			currentWord = ""; 		// ERASE TEXT
		}
		if(Input.GetKeyDown("e")){
					// PAUSE TEXT? 		
		}
	  	//-----------------------	  
	}
}
		
function Update(){
	if(Input.GetMouseButtonDown(0) && collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit, Mathf.Infinity)){
		
		shopOpen = true; 
		
		if (!onetime){
		    TypeText(word);
		    onetime = true;
  		}
	}
	
	tanStatus = sunEffects.tan;
	if (tanStatus > 0.8){
		commentTan = "tan";
	}
	else{
		commentTan = "super pale skin";
	}
	word = "SUP, nice " + commentTan + ".";
		
}




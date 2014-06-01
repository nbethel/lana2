
public var fadeOutTexture : Texture2D;
public var fadeSpeed = 1.0;
var drawDepth = -1000;
var alphaWait : boolean = true;
private var alpha = 1.0;
private var fadeDir = -1;

function OnGUI(){
 
   if(alphaWait == false) {
	    	alpha += fadeDir * fadeSpeed * Time.deltaTime;
	}
	   
	    alpha = Mathf.Clamp01(alpha);  
	   
	    GUI.color.a = alpha;
	   
	    GUI.depth = drawDepth;
	   
	    GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeOutTexture);
}
 
//--------------------------------------------------------------------
 
function fadeIn(){
	transform.GetComponent("CharacterController").enabled = false;
    yield WaitForSeconds(1);
    alphaWait = false;
 
    fadeDir = -1;  
    yield WaitForSeconds(1);
    transform.GetComponent("CharacterController").enabled = true;
}
 
//--------------------------------------------------------------------
 
function fadeOut(){
    fadeDir = 1;  
}
 
function Start(){   
    alpha=1;
    fadeIn();
}

function Update(){
	if(Input.GetKeyDown("f")){
		fadeOut();
	}
}
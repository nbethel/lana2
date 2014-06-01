#pragma strict
 
var theTimer : float = 0.0;
var theStartTime : float = 100.0;
var showRemaining : boolean = false;
 
function Start(){
    theTimer = theStartTime;
}
 
function Update(){
    theTimer -= Time.deltaTime;
 
    if (theTimer < 10) 
    {
        Debug.Log("TEN SECONDS LEFT !");
        showRemaining = true;
    }
 
    if (theTimer <= 0) 
    {
        Debug.Log("OUT OF TIME");
        theTimer = 0;
    }
 
    if ( Input.GetKeyUp(KeyCode.G) )
    {
        Debug.Log("Resetting");
        theTimer = theStartTime;
        showRemaining = false;
    }
}
 
function OnGUI(){
    var text : String = String.Format( "{0:00}:{1:00}", parseInt( theTimer / 60.0 ), parseInt( theTimer % 60.0 ) ); 
 
    if (showRemaining)
    {
        GUI.Label( Rect( 10, 10, Screen.width - 20, 30), text );
    }
}
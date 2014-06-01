var originalCursor : Texture2D;
 
var cursorSizeX: int = 32;  // set to width of your cursor texture
var cursorSizeY: int = 32;  // set to height of your cursor texture
 
static var showOriginal : boolean = true;
 
var guiDepth : int = -1;
  
function Start(){
Screen.showCursor = false;
//Screen.lockCursor = true;
}
 
function OnGUI(){

 	GUI.depth = guiDepth; 
 	
    if(showOriginal == true){
        GUI.DrawTexture (Rect(Input.mousePosition.x-cursorSizeX/1 + cursorSizeX/2, (Screen.height-Input.mousePosition.y)-cursorSizeY/1 + cursorSizeY/2, cursorSizeX, cursorSizeY),originalCursor);
    }
}
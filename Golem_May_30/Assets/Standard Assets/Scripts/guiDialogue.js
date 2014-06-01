
var trigger = 0;
var dialogBox = 0;
var textVar : String = "Hello world";

var controlTexture : Texture2D;

var optionA : boolean = true;
var optionB : boolean = false;

var controller : CharacterController = GetComponent(CharacterController);


function OnGUI (){ 

var pos = controller.transform.position - Vector3.up * 3;
var screenPos = Camera.main.WorldToScreenPoint(pos);

if (trigger == 0){ 
	if (dialogBox == 0){ 
	GUI.Box (Rect (screenPos.x, screenPos.y, 120, 90), "[Character name]"); 
	GUI.Label (Rect (screenPos.x + 30,screenPos.y + 20,100,50), "[Text body]"); 
	GUI.Label (Rect (screenPos.x + 50,screenPos.y + 40,100,50), "[Option 1]"); 
	GUI.Label (Rect (screenPos.x + 50,screenPos.y + 60,100,50), "[Option 2]"); 
	
	if (optionA == true){ 
	GUI.Label (Rect (screenPos.x + 15,screenPos.y + 40,100,50), controlTexture); 
	} 
	
	else if (optionB == true){ 
		GUI.Label (Rect (screenPos.x + 15,screenPos.y + 60,100,50), controlTexture); 
	} 
	
	if (Input.GetKey(KeyCode.Q)) { optionA = true; optionB = false; } else if (Input.GetKey(KeyCode.A)) { optionA = false; optionB = true; }
} 
if (Input.GetKeyDown(KeyCode.P)){ 
dialogBox = 1;
} 
if (Input.GetKeyDown(KeyCode.O)){ 
dialogBox = 0;
} 
GUI.Box (Rect (700, 50, 200, 100), "[Help]"); GUI.Label (Rect (715,70,170,50), "[Switch between options with 'Q' and 'A']"); GUI.Label (Rect (715,110,170,50), "[Turn dialogue box on or off with 'O' and 'P']");
}

//GUI.Box (Rect (600,10,100,50), GUIContent("This is text", controlTexture)); //Icon and text together // This line feeds "This is the tooltip" into GUI.tooltip
GUI.Button (Rect (400,10,100,20), GUIContent ("Click me", "This is the tooltip"));
// This line reads and displays the contents of GUI.tooltip
GUI.Label (Rect (400,40,100,20), GUI.tooltip);

GUI.Button (Rect (400,50,100,20), GUIContent ("Click me", controlTexture, "This is the tooltip"));
GUI.Label (Rect (400,70,100,20), GUI.tooltip);
}
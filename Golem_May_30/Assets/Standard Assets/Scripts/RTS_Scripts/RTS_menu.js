
var GUIEnabled : boolean = false; 
static var vSliderValue : float = 1.0;

function Update(){

	if(Input.GetKeyDown("n")){
	//if(Input.GetKeyDown("n") && chatSystem.istyping == false){
		GUIEnabled = !GUIEnabled;
	}
}

function OnGUI(){

	if(GUIEnabled){
	
		vSliderValue = GUI.HorizontalSlider(Rect(Screen.width / 2, Screen.height / 2- 100, 100, 30), vSliderValue, 0.0, 10.0);
		
		if(GUI.Button(Rect(Screen.width / 2, Screen.height / 2 - 40,80,20), "Help")){
		
		}
		
		if(GUI.Button(Rect(Screen.width / 2, Screen.height / 2 - 20,80,20), "Options")){
		
		}
		
		if(GUI.Button(Rect(Screen.width / 2, Screen.height / 2,80,20), "Exit")){
			GUIEnabled = !GUIEnabled;
		}
		
	}

}
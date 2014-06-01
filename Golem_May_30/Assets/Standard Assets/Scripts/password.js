
var password : String = "";

function OnGUI(){
	
	password = GUI.PasswordField (Rect (10, 10, 200, 20), password, "*"[0], 25);
	
	if(GUI.Button(Rect(Screen.width / 2, Screen.height / 2, 80, 20), "Start Game")){
		
		if(password == "poo"){
			Debug.Log("BOOBLAHALAH");	
		}
	}
}


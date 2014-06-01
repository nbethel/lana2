
function Start(){
	OnLoad();
	//autoSaveEnabled();
}

function autoSaveEnabled(){

	for(var x = 1; x > 0; x++){
	
		yield WaitForSeconds(5);
		
		Debug.Log("saved");
		OnSave();
	}
}

function OnSave(){
	
	PlayerPrefs.SetInt("Level", playerStats.level);
	PlayerPrefs.SetInt("CurXp", playerStats.curXp);
	PlayerPrefs.SetInt("MaxXp", playerStats.maxXp);

}

function OnLoad(){
		
	playerStats.level = PlayerPrefs.GetInt("Level");
	playerStats.curXp = PlayerPrefs.GetInt("CurXp");
	playerStats.maxXp = PlayerPrefs.GetInt("MaxXp");

}

function Update(){

	if(Input.GetKeyDown("q")){
		Debug.Log("saved game!");
		OnSave();
	}

	if(Input.GetKeyDown("x")){
		Debug.Log("deleted save!");
		PlayerPrefs.DeleteAll();
	}
}
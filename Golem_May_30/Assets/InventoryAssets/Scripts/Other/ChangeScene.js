#pragma strict

var LevelName = "Level02";
var PlayerName = "Golem";
var thirdPersonCam = "Main Camera";

@script AddComponentMenu ("Inventory/Other/ChangeScene")

function Awake () 
{
	DontDestroyOnLoad (GameObject.Find(PlayerName));
	DontDestroyOnLoad (GameObject.Find(thirdPersonCam));
}

function Update ()
{
	if (Input.GetKeyDown(KeyCode.T))
	{
		Application.LoadLevel("Level02");
	}
}
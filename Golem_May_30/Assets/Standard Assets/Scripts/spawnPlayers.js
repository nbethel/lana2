 // *******Main Menu Script *******
     
    function OnGUI () {
     
       if (GUI.Button (Rect (Screen.width / 2,Screen.height / 2 - 100,140,20), "character1")) {
     
       spawnPlayers.characterSelected = 0;
     
       PlayerPrefs.SetInt("selectCharacter", spawnPlayers.characterSelected);
       
       }
       
       if (GUI.Button (Rect (Screen.width / 2,Screen.height / 2 - 200,140,20), "character2")) {
     
       spawnPlayers.characterSelected = 1;
     
       PlayerPrefs.SetInt("selectCharacter", spawnPlayers.characterSelected);
       
       }
     
      }
    //******SpawnPlayer Script****** 
    static var characterSelected : int;
     
    var character1 : GameObject;
    var character2 : GameObject;
     
     
    function Start () {
     
    characterSelected = PlayerPrefs.GetInt("selectCharacter");
     
    Debug.Log(characterSelected);
     
    if(characterSelected == 0) {
     
    Instantiate(character1,this.transform.position, Quaternion.identity);
     
    }

    else if(characterSelected == 1) {
     
    Instantiate(character2,this.transform.position, Quaternion.identity);
     
     
    }
     
     
     
     
     
    }
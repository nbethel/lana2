/*

#pragma strict
var SavedPosition;     //////////////

function Start () {
    SavedColor = PlayerPrefs.GetString("Color");
    if(SavedColor  != null){
            if(SavedColor == "Yellow"){
                renderer.material.color = Color.yellow;
                }
            else{
                renderer.material.color = Color.red;
                }
        }
}

function OnGUI(){
    if(GUI.Button(Rect(100,100,100,100),"Yellow")){
        renderer.material.color = Color.yellow;
        Save("Yellow");
    }
    if(GUI.Button(Rect(100,200,100,100),"Red")){
        renderer.material.color = Color.red;
        Save("Red");
    }
}

function Save(color : String){
    PlayerPrefs.SetString("Color",color);
    print(color);
}

*/
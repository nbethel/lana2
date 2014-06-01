
var letterPause = 0.2;
var sound : AudioClip;
 
private var myText : String = "Autotyping text." + "\n" + "Amazing.";
 
function Start () {
	TypeText();
}
 
function TypeText () {
		for (var letter in myText.ToCharArray()) {
	    guiText.text += letter;
	    if (sound)
		    audio.PlayOneShot (sound);
		    yield WaitForSeconds (letterPause);
    }              
}

#pragma strict

var intelligence : int = 5; //default option
var hatEquipped : int = 0;

var hat1  : GameObject;
var hat2  : GameObject;   
    
function Awake(){
	//Greet();
}

function Update(){
	
	Hats();
	
	if(Input.GetKeyDown("1")){
		hatEquipped = 1;
	}
	if(Input.GetKeyDown("2")){
		hatEquipped = 2;
	}
}
  
function Hats(){
	switch (hatEquipped){
	case 1:
		print("Wearing hat #1");
		hat1.active = true;
		hat2.active = false;
		break;
	case 2:
		print("Wearing hat #2");
		hat2.active = true;
		hat1.active = false;
		break;
	default:
        //print ("No hat?");
        break;
    }
}       

function Greet(){
    switch (intelligence){
    case 5:
        print ("Why hello there good sir! Let me teach you about Trigonometry!");
        break;
    case 4:
        print ("Hello and good day!");
        break;
    case 3:
        print ("Whadya want?");
        break;
    case 2:
        print ("Grog SMASH!");
        break;
    case 1:
        print ("Ulg, glib, Pblblblblb");
        break;
    default:
        print ("Incorrect intelligence level.");
        break;
    }
}
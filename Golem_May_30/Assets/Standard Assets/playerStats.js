
var healthtext : GUIText;
var xptext : GUIText;

static var curHealth : int = 100;
static var maxHealth : int = 100;

var HpBarTexture : Texture2D;
var HpBarEmptyTexture : Texture2D;

var hpBarLength : float;
var percentOfHp : float;

static var curXp : int = 0;
static var maxXp : int = 200;

static var level : int = 1;

static var minAttack : int = 10;
static var maxAttack : int = 50;

static var attackPower : int = 2;
 
var golemHeadBone : GameObject;
var golemTorsoBone : GameObject;
  
var headSlot  : GameObject;
var chestSlot : GameObject;
var meleeSlot : GameObject;

static var form1       : boolean = true;					// Blobby  form active
//var form1Active : boolean = true;

private var form2Ready : boolean = false;			// Can accumulate enough clay for form2

static var form2      : boolean = false; 				// "Chibi" form active
//var form2Active : boolean = false; 				// "Chibi" form active

//var golemContainer    : Transform;
var golem    : Transform;
private var golemCurrentBody  : GameObject;   //Get rid of this later. Form1 is default.
var form1Body         : GameObject;
var form2Body         : GameObject;

static var inShade : boolean;


function Start(){
	healthRegen();
	var controller : CharacterController = GetComponent(CharacterController);
	
	golemHeadBone = GameObject.Find("headBone");
	headSlot.transform.parent = golemHeadBone.transform;
	
  	if(golemTorsoBone != null){
  		chestSlot.active = true;
  		golemTorsoBone = GameObject.Find("torso");
		chestSlot.transform.parent = golemTorsoBone.transform;
  	}
  	else{
		chestSlot.active = false;
	}
}

function OnGUI(){

	GUI.DrawTexture(Rect((Screen.width/2) - 100, 10, 100, 10), HpBarEmptyTexture);
	
	if (curHealth > 0){
		GUI.DrawTexture(Rect((Screen.width/2) - 100, 10, hpBarLength, 10), HpBarTexture);	    
	}	
}

function Update(){

	percentOfHP = curHealth/maxHealth;
	hpBarLength = curHealth;
	//hpBarLength = percentOfHP * 100;

	healthtext.text = curHealth + " / " + maxHealth;
	xptext.text = "Level " + level + " XP " + curXp + " / " + maxXp;
	
	if(curHealth < 0){
		curHealth = 0;
	}
	if(curHealth > maxHealth){
		curHealth = maxHealth;
	}
	if(Input.GetKeyDown("9")){ //Subtract health
		curHealth -= 10;
	}
	if(Input.GetKeyDown("0")){ //Add experience
		curXp += 100;
	}
	//if(curXp == maxXp){
	if(curXp >= maxXp){
		levelUpSystem();
	}
}

function healthRegen(){
	for(i=1; i>0; i++){
	
		yield WaitForSeconds(0.5); 
		
		if(curHealth < maxHealth){
			curHealth++;
		}
	}
}

function levelUpSystem(){
	curXp = 0;
	maxXp = maxXp + 150;
	level++;
	
	maxHealth += 100;
	curHealth = maxHealth;
	
	if(level >= 1){
		//print("Reached level x! Able to grow!");
		form2Ready = true;
	}
}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "attackBuff"){
	
		Debug.Log("Health Bonus!");
		maxHealth = maxHealth += 300;
		yield WaitForSeconds(5);
		maxHealth = maxHealth -= 300;
		Debug.Log("Health back to normal");		
	}
	if(col.gameObject.tag == "damagePlayer"){
		curHealth -= 10;		
	}
	
	if(col.gameObject.tag == "Mud"){
		
		golemHeadBone = GameObject.Find("headBone");
		headSlot.transform.parent = golemHeadBone.transform;
		headSlot.transform.position = golemHeadBone.transform.position;
		headSlot.transform.rotation = golemHeadBone.transform.rotation;
		
		golemTorsoBone = GameObject.Find("torso");
		if(golemTorsoBone != null){
		chestSlot.active = true;
		chestSlot.transform.parent = golemTorsoBone.transform;
		chestSlot.transform.position = golemTorsoBone.transform.position;
		chestSlot.transform.rotation = golemTorsoBone.transform.rotation;
		}
		else {
	  		chestSlot.active = false;
	  	}
		
		if( (form1 == true) && (form2Ready == true) ){  
			headSlot.transform.parent = null;
			chestSlot.transform.parent = null;
			
			form1 = false;
			form2 = true;
			beForm2();
		}
	}	
	
	if(col.gameObject.tag == "RoughWater"){ 
		
		golemHeadBone = GameObject.Find("headBone");
		headSlot.transform.parent = golemHeadBone.transform;
		headSlot.transform.position = golemHeadBone.transform.position;
		headSlot.transform.rotation = golemHeadBone.transform.rotation;
		
		golemTorsoBone = GameObject.Find("torso");
		if(golemTorsoBone != null){
		chestSlot.active = true;
		chestSlot.transform.parent = golemTorsoBone.transform;
		chestSlot.transform.position = golemTorsoBone.transform.position;
		chestSlot.transform.rotation = golemTorsoBone.transform.rotation;
		}
		else {
	  		chestSlot.active = false;
	  	}
		
		if(form2 == true){
			headSlot.transform.parent = null;
		  	chestSlot.transform.parent = null;
		  	
			form1 = true;
			form2 = false;
			beForm1();
		}	
	}
		
	if(col.gameObject.tag == "Shade"){
		inShade = true;
	} 
}

function OnTriggerStay(col : Collider){
	if(col.gameObject.tag == "Shade"){
		inShade = true;
	} 
}
function OnTriggerExit(col : Collider){
	if(col.gameObject.tag == "Shade"){
		inShade = false;
	} 
}

function beForm1(){
	//Adjust height and center of controller
	controller = GetComponent(CharacterController);		
	controller.height = 1;									
	controller.center = Vector3 (0, -0.42, 0);			
	
	currentBody = GameObject.Find("Body");
	
	Destroy(currentBody); 
							
	body = Instantiate(form1Body, transform.position + Vector3(0 ,-1.005514 , 0), transform.rotation);
	body.name = "Body";
	body.transform.parent = golem;
		
	form2Ready = true;	
}

function beForm2(){
	//Adjust height and center of controller
	controller = GetComponent(CharacterController);
	controller.height = 2;					
	controller.center = Vector3 (0, 0.09, 0);		
	
	currentBody = GameObject.Find("Body");
	
	Destroy(currentBody); 
			
	body = Instantiate(form2Body, transform.position + Vector3(0 ,-1.005514 , 0), transform.rotation);
	body.name = "Body";
	body.transform.parent = golem;	
	
	form2Ready = false;
}



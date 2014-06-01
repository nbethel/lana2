
var enemyHealth : int = 100;
var expWorth : int = 50;
var enemyHealthText : GUIText;
//var displayDamage : GUIText;

var attackCooldown : boolean = false; 

function Update(){

	if(enemyHealth < 0){
		enemyHealth = 0;
	}

	enemyHealthText.text = "HP " + enemyHealth;

	if(this.enemyHealth <= 0){
		playerStats.curXp += expWorth;
				
		Destroy(this.gameObject);
	}
}

function OnTriggerStay (col : Collider){

	if((col.gameObject.tag == "damageEnemy") && (attackCooldown == false)){

			attackCooldown = true;
			attackingCoolDown();
			this.enemyHealth -= 40;
	}
	
	if(col.gameObject.tag == "attackArea"){
	
		if(Input.GetKeyDown("e") && (attackCooldown == false)){
				
			attackCooldown = true;
			attackingCoolDown();
		
			var randomDamage = Random.Range(playerStats.minAttack, playerStats.maxAttack) * playerStats.attackPower;

			this.enemyHealth -= randomDamage;
//			displayDamage.text = "Damage " + randomDamage;
			spawnPts(randomDamage,0.3,0.4);
		}
	}
}

function attackingCoolDown(){
		yield WaitForSeconds(1);
		attackCooldown = false;
	}
							
var ptsPrefab: Transform; //drag the prefab to this variable in inspector

function spawnPts(points: float, x: float, y: float){
    x = Mathf.Clamp(x,0.05,0.95); // clamp position to screen to ensure
    y = Mathf.Clamp(y,0.05,0.9);  // the string will be visible
    var gui: Transform = Instantiate(ptsPrefab,Vector3(x,y,0),Quaternion.identity);
    gui.guiText.text = points.ToString();
    gui.guiText.material.color = Color(1,1,1,1.0);
}


		
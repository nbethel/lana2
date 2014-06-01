
var target : Transform;
var rotationSpeed = 5;
var myTransform : Transform;
var canMove : boolean = true;
var inCombat : boolean = false;
var fireSpell : Transform;
var pathingCooldown : boolean = false;
var atTower1 : boolean = false;
var attackCooldown : boolean = false;
 
function Awake(){
	myTransform = transform;
}
 
function Start(){
    target = GameObject.FindWithTag("node2").transform;
}
 
function Update () {

	if(TowerScript.tower1destroyed == false && atTower1 == true && attackCooldown == false) {
		Instantiate(fireSpell,this.transform.position,Quaternion.identity);
		minionAttackCooldown();
	}
 
    else if( TowerScript.tower1destroyed == true && atTower1 == true) {
 
    canMove = true;
	}

    //check to make sure not being attack. if attacked then inCombat = true. applies to both enemy players and other minions.

      //if no enemy no longer in distance continue towards tower. inCombat == false

     //head to the tower if no enemy is in range or been attacked
 
        if(canMove == true && inCombat == false ) {
        var moveSpeed = Random.Range(10,150);
        var randomPathing = Random.Range(0,2);
        var randomSpeed = Random.Range(-160,160);

        myTransform.rotation = Quaternion.Slerp(myTransform.rotation,

        Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);

        if(randomPathing == 0) {

        myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;

       }

        if(randomPathing == 1) {

        myTransform.position += myTransform.right * randomSpeed * Time.deltaTime;

       }
     }
     //if incombat == true then target / attack nearest enemy
}
 
    //trigger while stay. Attack tower. If enemies come close then attack enemies instead so switch to inCombat

    //towers not dead then keep attacking tower

    function OnTriggerEnter (col : Collider) {
 
	    if(col.gameObject.tag == "tower1trigger"){

		    if(TowerScript.tower1destroyed == false){

			    Debug.Log("entered tower1");
			    this.canMove = false;
			    this.atTower1 = true;
	    	}
	     	//else head to tower 2
	     
			if(col.gameObject.tag == "fireAttack"){

				Destroy(this.gameObject);    
			}      
    	}
    }

          
            
  function minionAttackCooldown(){
	  attackCooldown = true;
	  yield WaitForSeconds(5);
	  attackCooldown = false;
  }
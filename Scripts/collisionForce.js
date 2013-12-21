#pragma strict

var breakForce : float;
var breakable : Transform;


function OnCollisionEnter( col : Collision ){
 
    if(col.relativeVelocity.magnitude > breakForce){ 
 		Destroy(gameObject);
 	Instantiate(breakable, transform.position, transform.rotation);
    }  
}
 
 
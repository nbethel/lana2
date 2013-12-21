#pragma strict

var damageConstant : float;
var carHealth : float;
 
function OnCollisionEnter( col : Collision ){
 
    if(col.relativeVelocity.magnitude > 10){ //remove this 
 
        carHealth -= damageConstant * col.relativeVelocity.magnitude ; //line 1
 
    }  //remove this
 
    if ( carHealth < 0 ){
 
        destroyCar();
 
    }
 
}    
 
function destroyCar(){
 
    //instantiate some fancy particle system for special effects
    //and maybe instantiate a heavily damaged car on its place
    Destroy(gameObject);  //destroy our car
}    
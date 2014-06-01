var node1 : Transform;
 
var block : GameObject;
 
 
 
function Start () {
 
spawnBlock();

}
 
 
 
function Update () { 
}
 
 

function spawnBlock () {
 

  for (var x = 1; x < 30; x++) {

    yield WaitForSeconds(1);
 
     Instantiate(block,node1.transform.position,node1.transform.rotation);

   }
 }
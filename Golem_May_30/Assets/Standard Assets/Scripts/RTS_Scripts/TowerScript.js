
static var tower1health : int = 60;
 
static var tower1destroyed : boolean = false;
 
 
function Update () {
 
 
 
 
if(tower1health <= 0) {
 
 
Destroy(this.gameObject);
 
 
}
 
 
 
 
 
 
 
 
}
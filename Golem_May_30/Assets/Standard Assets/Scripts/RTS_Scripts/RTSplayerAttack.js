var fireAttackPrefab : GameObject;
 
  function OnGUI () {
   
     if (GUI.Button (Rect (Screen.width / 2,Screen.height / 2 + 100,80,20), "Attack1")) {
 
                 attackFire();
  
        } 
    }
   
function Update () {
 
//attack fire
 
if(Input.GetKeyDown("1")) {
 
 attackFire();
 
 
}
  
}
 
 
 
function attackFire () {
 
Instantiate(fireAttackPrefab,this.transform.position,this.transform.rotation);

}
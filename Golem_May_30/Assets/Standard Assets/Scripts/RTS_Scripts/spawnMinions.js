
 var node1 : Transform;
     
    var minionPrefab : GameObject;
     
     
     
    function Start () {
     
    spawnMinion();
     
    }
     
     
     
    function Update () {
     
     
     
    }
     
     
     
     
     function spawnMinion () {
     
     
   
     
   
 
     
      for (var x = 1; x < 8; x++) {
     
     
     
       yield WaitForSeconds(0.2);
     
         
     
         Instantiate(minionPrefab,node1.transform.position,node1.transform.rotation);
     
     
     if(x == 7 ) {
     
       yield WaitForSeconds(5);
       
       x -= 8;
     
     
     }
     
     
     
     
     
       }
       
     
     
     
       
     
       
         
     
     }
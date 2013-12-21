#pragma strict

var Speed= 2;
var wayPoint : Vector3;
var Range= 10;
 
function Start(){
   //initialise the target way point
   Wander();
}
 
function Update() 
{
   // this is called every frame
   // do move code here
   transform.position += transform.TransformDirection(Vector3.forward)*Speed*Time.deltaTime;
    if((transform.position - wayPoint).magnitude < 3)
    {
        // when the distance between us and the target is less than 3
        // create a new way point target
        Wander();
    }
}
 
function Wander()
{ 
   // does nothing except pick a new destination to go to
 
    wayPoint=  Vector3(Random.Range(transform.position.x - Range, transform.position.x + Range), 1, Random.Range(transform.position.z - Range, transform.position.z + Range));
    wayPoint.y = 1;
   // don't need to change direction every frame seeing as you walk in a straight line only
    transform.LookAt(wayPoint);
    //Debug.Log(wayPoint + " and " + (transform.position - wayPoint).magnitude);
}
var camera1 : Camera;
 
var camera2 : Camera;
 
 
 
 
function Start () {
 
camera1.camera.active = true;
 
camera2.camera.active = false;
 
 
}
 
 
function Update () {
 
if(Input.GetKeyDown("k")) {
 
camera1.camera.active = false;
 
camera2.camera.active = true;
 
 
}
 
 
 
if(Input.GetKeyDown("l")) {
 
 
camera2.camera.active = false;
 
camera1.camera.active = true;
 
 
}
 
 
}
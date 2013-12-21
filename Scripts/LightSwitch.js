#pragma strict

private var insideLightTrigger: boolean = true;
insideLightTrigger = false;

var target : Transform;

var visible : Component[];
var collidable : Component[];
var glowing : Component[];


function OnTriggerEnter( other : Collider) {
        if(other.gameObject.tag == "Spirit") {
        insideLightTrigger = true;
                 
        }
     }
          
function OnTriggerExit( other : Collider) {
        if(other.gameObject.tag == "Spirit") {
        insideLightTrigger = false;
        }     
     }
                                      
function Update() {
		if ( (insideLightTrigger == true) && (Input.GetKeyDown(KeyCode.E))) {         
		Debug.Log("Pressed E!");
		
		visible = target.GetComponentsInChildren(Renderer);
		for (var i : Renderer in visible) {
		i.enabled = !i.enabled;
		}
		
		collidable = target.GetComponentsInChildren(Collider);
		for (var i : Collider in collidable) {
		i.enabled = !i.enabled;
		}
		
		glowing = target.GetComponentsInChildren(Light);
		for (var i : Light in glowing) {
		i.enabled = !i.enabled;
		}
	} 
}
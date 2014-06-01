
var clickEffect : GameObject; 
var targetAudio : AudioClip;
private var targetPosition : Vector3;
var speed = 60; 

function Update(){

	if(Input.GetKeyDown(KeyCode.Mouse0)){
		
		audio.PlayOneShot(targetAudio);
		
		speed = 23;
		
		var playerPlane = new Plane(Vector3.up, transform.position);
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hitdist = 0.0;
		
		if (playerPlane.Raycast (ray,hitdist)) {
			var targetPoint = ray.GetPoint(hitdist);
			targetPosition = ray.GetPoint(hitdist);
			var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
			transform.rotation = targetRotation;
			
			Instantiate(clickEffect, targetPosition, Quaternion.identity);
		}
	}

var dir : Vector3 = targetPosition - transform.position;
var dist : float = dir.magnitude;
var move : float = speed * Time.deltaTime;

if(dist > move){ 	//Moving towards target

	transform.position += dir.normalized * move;
	
	}else{ 			//When at target
		transform.position = targetPosition;
	}
		transform.position += (targetPosition - transform.position).normalized * speed * Time.deltaTime;		
}

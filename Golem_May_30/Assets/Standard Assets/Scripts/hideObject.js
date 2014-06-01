
function Update() {
 
	var hit: RaycastHit;
	var forward = transform.TransformDirection (Vector3.forward);
	 
	if (Physics.Raycast (transform.position, forward, hit)) {
	 
	 
	if(hit.collider.CompareTag("hideObject")){
	 
	Debug.Log("object hidden");
	 
	o = hit.collider.gameObject;
	 
	o.renderer.material.color.a = 0.2;
	 
	}
	 
	else {
	 
	    var hides : GameObject[];
	 
	    hides = GameObject.FindGameObjectsWithTag("hideObject");
	 
	    // Iterate through them and turn each one off
	 
	    for (var hide : GameObject in hides)
	 
	    {
	 
	    hide.renderer.material.color.a = 1.0;
	 
	    } 
	}
	 
} 
 
}
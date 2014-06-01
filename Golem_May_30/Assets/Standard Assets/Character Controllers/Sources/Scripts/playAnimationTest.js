#pragma strict

function Start () {
	
}

function Update () {
	if (Input.GetKeyDown ("w")){
			animation.Play("walkAnimation");
	}
}
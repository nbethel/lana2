var score = 0;

function OnTriggerEnter( other : Collider ) {
	Debug.Log("ENERGY COLLECTED");
    if (other.tag == "Energy") {
        score += 5;
        Destroy(other.gameObject);
    }
}
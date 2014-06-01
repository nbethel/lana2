
function OnTriggerEnter (col : Collider){

	if(col.gameObject.tag == "Player"){
	
		inventory.inventoryArray[0]++;
		Destroy(this.gameObject);
	}
}
#pragma strict

var deleteOnUse = true;

private var playersInv : Inventory;
private var item : Item;

@script AddComponentMenu ("Inventory/Items/Item Effect")
@script RequireComponent(Item)

//This is where we find the components we need
function Awake (){
	playersInv = FindObjectOfType(Inventory); //finding the players inv.
	if (playersInv == null)
	{
		Debug.LogWarning("No 'Inventory' found in game. The Item " + transform.name + " has been disabled for pickup (canGet = false).");
	}
	item = GetComponent(Item);
}

function UseEffect() {
	Debug.LogWarning("<INSERT CUSTOM ACTION HERE>"); //INSERT CUSTOM CODE HERE!
	
	//---------------------------------------------------
	playerStats.curHealth += 30;
	
	//Play a sound
	playersInv.gameObject.SendMessage("PlayDropItemSound", SendMessageOptions.DontRequireReceiver);
	
	//This will delete the item on use or remove 1 from the stack (if stackable).
	if (deleteOnUse == true)
	{
		DeleteUsedItem();
	}
}

//This takes care of deletion
function DeleteUsedItem(){
	if (item.stack == 1) //Remove item
	{
		playersInv.RemoveItem(this.gameObject.transform);
		Destroy(this.gameObject);
	}
	else //Remove from stack
	{
		item.stack -= 1;
	}
}
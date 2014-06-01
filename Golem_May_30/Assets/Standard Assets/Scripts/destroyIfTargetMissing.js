
var enemyUnit : Transform;

function Update(){
	if (enemyUnit == null){
		Destroy(this.gameObject);
	}
}
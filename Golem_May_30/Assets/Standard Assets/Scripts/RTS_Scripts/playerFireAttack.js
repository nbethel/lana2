
var fireAttackSpeed : float = 1.0;

function Update () {
//this.transform.position.x -= fireAttackSpeed;
this.transform.Translate(Vector3.forward * fireAttackSpeed);
}
// Change spot angle randomly between 'minAngle' and 'maxAngle'
// each 'interval' seconds.
	var interval : float = 0.3;
	var minAngle : float = 10;
	var maxAngle : float = 90;
	private var timeLeft : float;
		
	timeLeft = interval;
	light.type = LightType.Spot;
	

function Update () 
	{
	
	timeLeft -= Time.deltaTime;
		if (timeLeft < 0.0) {
		// time to change!
		timeLeft = interval;
		light.spotAngle = Random.Range( minAngle, maxAngle );
		rigidbody.velocity += transform.up * Random.Range(5, 10);
		}
}
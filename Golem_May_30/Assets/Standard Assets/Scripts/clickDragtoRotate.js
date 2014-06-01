var speed : int = 5;
 
var lerpSpeed : float = 5.0;
 
private var xDeg : float;
 
private var YDeg : float;
 
private var fromRotation : Quaternion;
 
private var toRotation : Quaternion;
 
     
 
    function Update () {
 
    if(Input.GetMouseButton(0)) {
 
    xDeg -= Input.GetAxis("Mouse X") * speed;
    
    yDeg = 0;
 
    fromRotation = transform.rotation;
 
    toRotation = Quaternion.Euler(yDeg,xDeg,0);
 
    transform.rotation = Quaternion.Lerp(fromRotation,toRotation,Time.deltaTime * lerpSpeed);
 
    }
 
    }
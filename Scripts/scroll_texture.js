var scrollSpeed = 0.25; 
function FixedUpdate() 
{ 
    var offset = Time.time * scrollSpeed; 
    renderer.material.mainTextureOffset = Vector2 (0,-offset); 
} 

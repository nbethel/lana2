#pragma strict

	function Update() {
		if (Input.GetMouseButtonDown(0)) {
			var hit: RaycastHit;
			var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			
			if (Physics.Raycast(ray, hit)) {
				if (hit.collider != null)
					hit.collider.enabled = false;
					print("CLICK");
			}
		}
	}
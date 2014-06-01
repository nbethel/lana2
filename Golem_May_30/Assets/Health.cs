using UnityEngine;
using System.Collections;
using RAIN.Core;

public class Health : MonoBehaviour {
	public float health = 100f;
	private AIRig aiRig = null;
	
	void Start () {
		//aiRig = gameObject.GetComponentInChildren<AIRig>();
	}
	
	void Update () {
		//aiRig.AI.WorkingMemory.SetItem("health", health);
	}
	
	public void Damage(float damage) {
		health = Mathf.Clamp(health - damage, 0, health);
	}
}

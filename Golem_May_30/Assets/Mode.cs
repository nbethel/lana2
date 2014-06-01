using UnityEngine;
using System.Collections;
using RAIN.Core;

public class Mode : MonoBehaviour {
	public bool chasing = false;
	public float mode = 0f;
	
	void Start () {
	}
	
	void Update () {
	}
	
	public void change() {
		Debug.Log ("Changing");
		mode=0;
	}
	public void set1() {
		Debug.Log ("Set1");
		mode=1;
	}
	public void set0() {
		Debug.Log ("Set0");
		mode=0;
	}
}
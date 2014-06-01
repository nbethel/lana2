using UnityEngine;
using System.Collections;
using RAIN.Core;

public class Camo : MonoBehaviour {
	public float forestcamo = 0f; //Don't forget to edit Tracker AI to match term
	public float maxCamo = 100f; 
		
	private camouflage	jsScript;
		
		void Start () {

			jsScript = this.GetComponent<camouflage>();
		}
		
		void Update () {

			forestcamo = jsScript.forestCamo;
		}
}

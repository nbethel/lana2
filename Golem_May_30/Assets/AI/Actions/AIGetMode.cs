using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using RAIN.Core;
using RAIN.Action;
using RAIN.Representation;

[RAINAction]
public class AIGetMode : RAINAction 
{
	public Expression enemy;
	private Mode enemyMode = null;
	private GameObject enemyObject = null;
	
	public AIGetMode() 
	{
		actionName = "AIGetMode";
	}
	
	public override void Start(AI ai)
	{
		enemyObject = enemy.Evaluate(ai.DeltaTime, ai.WorkingMemory).GetValue<GameObject>();
		if (enemyObject != null)
			enemyMode = enemyObject.GetComponent<Mode>();

		base.Start(ai);

	}
	
	public override ActionResult Execute(AI ai)
	{
		if (enemyMode == null){
			//Debug.Log ("Hi");
			return ActionResult.FAILURE;
		}
		Debug.Log ("NotHi");
 		enemyMode.change();

		return ActionResult.SUCCESS;
		
	}
}






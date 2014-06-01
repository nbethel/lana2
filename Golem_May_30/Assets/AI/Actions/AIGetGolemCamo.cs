using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using RAIN.Core;
using RAIN.Action;
using RAIN.Representation;

[RAINAction]
public class AIGetGolemCamo : RAINAction {
	public Expression enemy;
	private Camo enemyCamo = null;
	private GameObject enemyObject = null;
	
	public AIGetGolemCamo() {
		actionName = "AIGetGolemCamo";
	}
	
	public override void Start(AI ai)
	{
		enemyObject = enemy.Evaluate(ai.DeltaTime, ai.WorkingMemory).GetValue<GameObject>();
		if (enemyObject != null)
			enemyCamo = enemyObject.GetComponent<Camo>();
		
		base.Start(ai);
	}
	
	public override ActionResult Execute(AI ai)
	{
		if (enemyCamo == null) {
			ai.WorkingMemory.SetItem("forestCamo", 0f);
			return ActionResult.FAILURE;
		}
		else
			ai.WorkingMemory.SetItem("forestCamo", enemyCamo.forestcamo);
			return ActionResult.SUCCESS;
	}
}
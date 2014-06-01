using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using RAIN.Core;
using RAIN.Action;
using RAIN.Representation;

[RAINAction]
public class AIGetGolemHealth : RAINAction
{
	public Expression enemy;
	private Health enemyHealth = null;
	private GameObject enemyObject = null;

	public AIGetGolemHealth()
    {
		actionName = "AIGetGolemHealth";
    }

    public override void Start(AI ai)
    {
		enemyObject = enemy.Evaluate(ai.DeltaTime, ai.WorkingMemory).GetValue<GameObject>();
		if (enemyObject != null)
			enemyHealth = enemyObject.GetComponent<Health>();

        base.Start(ai);
    }

    public override ActionResult Execute(AI ai)
    {
		if (enemyHealth == null){
			ai.WorkingMemory.SetItem("defenderhealth", 0f);
			return ActionResult.FAILURE;
		}
		ai.WorkingMemory.SetItem("defenderhealth", enemyHealth.health);

        return ActionResult.SUCCESS;
    }
}
using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using RAIN.Core;
using RAIN.Action;
using RAIN.Representation;

[RAINAction]
public class AIDamageEnemy : RAINAction
{
	public Expression enemy;
	private Health enemyHealth = null;
	private GameObject enemyObject = null;

	public AIDamageEnemy()
    {
        actionName = "AIDamageEnemy";
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
		if (enemyHealth == null) {
			Debug.Log ("Heallttthtth");
			return ActionResult.FAILURE;
		}
		Debug.Log ("Herehere");
		enemyHealth.Damage(5f);

        return ActionResult.SUCCESS;
    }
}
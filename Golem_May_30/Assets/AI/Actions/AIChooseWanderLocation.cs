using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using RAIN.Core;
using RAIN.Action;
using RAIN.Navigation;
using RAIN.Navigation.Graph;

[RAINAction("Choose Wander Location")]
public class AIChooseWanderLocation : RAINAction
{
    public AIChooseWanderLocation()
    {
        actionName = "AIChooseWanderLocation";
    }

    public override void Start(AI ai)
    {
        base.Start(ai);
    }

    public override ActionResult Execute(AI ai)
    {
		Vector3 loc = Vector3.zero;

        List<RAINNavigationGraph> found = new List<RAINNavigationGraph>();
        do
        {
            loc = new Vector3(ai.Kinematic.Position.x + Random.Range(-8f, 8f),
                    ai.Kinematic.Position.y,
                    ai.Kinematic.Position.z + Random.Range(-8f, 8f));
            found = NavigationManager.instance.GraphsForPoints(ai.Kinematic.Position, loc, ai.Motor.StepUpHeight, NavigationManager.GraphType.Navmesh, ((BasicNavigator)ai.Navigator).GraphTags);

        } while ((Vector3.Distance(ai.Kinematic.Position, loc) < 2f) || (found.Count == 0));
        		
		ai.WorkingMemory.SetItem<Vector3>("wanderTarget", loc);
		
        return ActionResult.SUCCESS;
    }

    public override void Stop(AI ai)
    {
        base.Stop(ai);
    }
}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LoadingHead2 : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        string target = StaticData.LSLoad;
        int variation = StaticData.LSVariation;
        bool found = false;

        foreach (Transform child in transform)
        {
            if (child.GetComponent<LoadingScreen>().VariationID == variation)
            {
                child.GetComponent<LoadingScreen>().target = target;
                child.GetComponent<LoadingScreen>().Selected = true;
                found = true;
            }
        }

        if (found == false)
        {
            Debug.LogError("Fatal: Target hasnt been found.");
            Application.Quit();
        }
    }
}

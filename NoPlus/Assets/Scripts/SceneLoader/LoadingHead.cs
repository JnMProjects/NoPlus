using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class LoadingHead : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        string target = StaticData.load;
        string arrow = null;
        Animator arrowimator = null;

        foreach (Transform child in transform)
        {
            LoadingScreen childcomponent = child.GetComponent<LoadingScreen>();
            Animator childimator = childcomponent.Animator;

            childimator.SetBool("selected", false);

            Debug.Log(child.name + " has ben Reset for Loading");
        }

        foreach (Transform child in transform)
        {
            LoadingScreen childcomponent = child.GetComponent<LoadingScreen>();
            Animator childimator = childcomponent.Animator;
            string childis = childcomponent.IAm;
            string childloads = childcomponent.ILoad;

            if (childis == target)
            {
                arrow = childloads;
                arrowimator = childimator;

                Debug.Log(child.name + "is the Target");
            }
        }

        if (arrow == null)
        {
            Debug.LogError("Fatal: Target hasnt been found.");
            Application.Quit();
        }

        StartCoroutine(LoadScene(arrow, arrowimator));

    }

    IEnumerator LoadScene(string target, Animator targetimator)
    {
        targetimator.SetBool("selected", true);
        yield return new WaitForSeconds(3);

        AsyncOperation operation = SceneManager.LoadSceneAsync(target);
        yield return operation;
    }
}

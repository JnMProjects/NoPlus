using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class LoadScene : MonoBehaviour
{
    public void Load(string Target, Animator animator)
    {
        StartCoroutine(StartLoading(Target, animator));
    }
    IEnumerator StartLoading(string Target, Animator animator)
    {
        StaticData.load = Target;
        animator.SetBool("exit", true);
        yield return new WaitForSeconds(2);
        AsyncOperation operation = SceneManager.LoadSceneAsync("SceneLoader");
    }
}

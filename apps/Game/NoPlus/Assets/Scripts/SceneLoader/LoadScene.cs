using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;

public class LoadScene : MonoBehaviour
{
    public void Load(string Target,int vaiation, Animator animator)
    {
        StartCoroutine(StartLoading(Target,vaiation, animator)); 
    }
    IEnumerator StartLoading(string Target,int variation, Animator animator)
    {
        StaticData.LSLoad = Target;
        StaticData.LSVariation = variation;
        animator.SetBool("exit", true);
        yield return new WaitForSeconds(2);
        AsyncOperation operation = SceneManager.LoadSceneAsync("SceneLoader");
    }
}

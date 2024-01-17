using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;
using UnityEngine.UIElements;
using UnityEngine.Events;

public class Loader : MonoBehaviour
{
    
    [SerializeField]
    private string target;
    private Animator animator;
    public void LoadScene()
    {
        StartCoroutine(Load());
    }
    IEnumerator Load()
    {
        StaticData.load = target;
        animator.SetBool("exit", true);
        yield return new WaitForSeconds(2);
        AsyncOperation operation = SceneManager.LoadSceneAsync("SceneLoader");
    }
}

using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class Var1 : MonoBehaviour
{
    [SerializeField] private Animator Animator;
    [SerializeField] private TextMeshProUGUI TopText;
    [SerializeField] private Sprite Lobby;
    [SerializeField] private Image Background;
    private Coroutine changetext;
    public string target;
    private float CProgress = 0; // Current Progress of the Loading Screen
    private float LProgress = -1f; // Progress of the Loading Screen -10 Frames

    private void Start()
    {
        TopText.text = " ";
    }

    public void StartLoading()
    {
        
        StartCoroutine(LoadScene(StaticData.LSLoad));

    }


    IEnumerator LoadScene(string target)
    {
        SetIMG(target);
        Animator.SetTrigger("enter");
        yield return new WaitForSeconds(1.5f);
        changetext = StartCoroutine(ChangeText("Loading " + target));
        yield return changetext;
        yield return new WaitForSeconds(1.5f);
        AsyncOperation operation = SceneManager.LoadSceneAsync(target);
        operation.allowSceneActivation = false;
        while (!operation.isDone)
        {
            CProgress = Mathf.Clamp01(operation.progress / 0.9f) * 100;
            if (CProgress != LProgress)
            {
                LProgress = CProgress;
                changetext = StartCoroutine(ChangeText("Loading" + target + ": " + LProgress + "%"));
                yield return changetext;
            }
            else if (CProgress == 100)
            {
                StartCoroutine(ChangeText(" "));   
                Animator.SetTrigger("exit");
                yield return new WaitForSeconds(1);
                StartCoroutine(ChangeText("Loading Complete!"));
                yield return new WaitForSeconds(1);
                operation.allowSceneActivation = true;
            }
        }
    }
    IEnumerator ChangeText(string text)
    {
        string oldText = TopText.text;
        for (int i = TopText.text.Length - 1; i >= 0; i--)
        {
            string partialText = TopText.text.Substring(0, i);
            TopText.text = partialText;
            yield return null;
            yield return null;
            yield return null;
            yield return null;
        }
        yield return new WaitForSeconds(0.5f);
        for (int i = 0; i <= text.Length; i++)
        {
            string partialText = text.Substring(0, i);
            TopText.text = partialText;
            yield return null;
            yield return null;
            yield return null;
            yield return null;
        }

    }
    void SetIMG(string target)
    {
        if (target == "Lobby")
        {
            Background.sprite = Lobby;
        }
        else
        {
            Debug.LogError("No Background Image for " + target);
        }
    }
}

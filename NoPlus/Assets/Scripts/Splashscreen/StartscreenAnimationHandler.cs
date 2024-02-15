using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using TMPro;
using UnityEngine.SceneManagement;
using Unity.Loading;

public class StartscreenAnimationHandler : MonoBehaviour
{
    [SerializeField] Animator animator; // Only needed to set index of text

    // Important: The index CANNOT jump from 1 to 3, it has to go 1 -> 2 -> 3 because it animates the string still shown on the screen away and the new one in
    // Aka It would look ugly teleporting away and animating old strings!       Also: The Index 0 is NOT and WILL NOT be used!
    [SerializeField] TextMeshProUGUI T1; // Text 1 / First Shown on the Splashscreen (first after) with Text Welcome(welcome is set in unity so no need to define again)
    [SerializeField] TextMeshProUGUI T2; // Text 2
    [SerializeField] TextMeshProUGUI T3; // Text 3
    [SerializeField] List<string> LobbyScenes;
    private int CurrentlyShownText = 1; // Needs to be clamped between 1 and 3
    private float LProgress = -1f; // Progress of the Loading Screen -10 Frames
    private AsyncOperation[] operations;
    private bool opsDone = false;
    private float progress = 0;

    void Start()
    {
        StartCoroutine(AnimationHandler());
    }

    IEnumerator AnimationHandler()
    {
        yield return new WaitForSeconds(9); // Wait till Splashscreen is over

        // Preset Text ("Connecting to Servers", "Starting Loading Sequence")
        nextText("Connecting to Servers");
        yield return new WaitForSeconds(2);
        nextText("Starting Loading Sequence");
        yield return new WaitForSeconds(1);

        operations = new AsyncOperation[LobbyScenes.Count];

        for (int i = 0; i < LobbyScenes.Count; i++)
        {
            operations[i] = SceneManager.LoadSceneAsync(LobbyScenes[i], LoadSceneMode.Additive);
            operations[i].allowSceneActivation = false;
        }

        while (!opsDone)
        {
            opsDone = AreOpsDone();
            progress = CalcProgress();
            if (progress != LProgress)
            {
                nextText("Loading: " + progress + "%");
                yield return new WaitForSeconds(0.2f); // Animation is 20 Frames = 0.2 Seconds
            }
            if (progress == 100)
            {
                nextText("Loading Complete!");
                yield return new WaitForSeconds(0.2f);
                for (int i = 0; i < LobbyScenes.Count; i++)
                {
                    nextText("Activating " + LobbyScenes[i]);
                    operations[i].allowSceneActivation = true;
                    yield return new WaitForSeconds(0.2f);
                }
                nextText("GLHF!");
                yield return new WaitForSeconds(0.1f);
                animator.SetTrigger("exit");
                yield return new WaitForSeconds(1);
                SceneManager.UnloadSceneAsync(0);
            }
        }
    }

    bool AreOpsDone()
    {
        int done = 0;
        for (int i = 0; i < operations.Length; i++)
        {
            if (operations[i].isDone)
            {
                done++;
            }
        }
        if (done == operations.Length)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    float CalcProgress()
    {
        float progress = 0;
        for (int i = 0; i < operations.Length; i++)
        {
            progress += Mathf.Clamp01(operations[i].progress / 0.9f) * 100;
            Debug.Log("Progress of " + LobbyScenes[i] + " is " + (Mathf.Clamp01(operations[i].progress / 0.9f) * 100) + "%");
        }
        progress = progress / operations.Length;
        return progress;
    }

    void nextText(string text) // Function to set the next text to be shown
    {
        if (CurrentlyShownText == 1)
        {
            T2.text = text;
            CurrentlyShownText = 2;
        }
        else if (CurrentlyShownText == 2)
        {
            T3.text = text;
            CurrentlyShownText = 3;
        }
        else if (CurrentlyShownText == 3)
        {
            T1.text = text;
            CurrentlyShownText = 1;
        }
        else
        {
            Debug.LogError("Fatal: CurrentlyShownText is not between 1 and 3! ID = " + CurrentlyShownText + ", Argument: " + text);
        }
        animator.SetInteger("index", CurrentlyShownText);
        Debug.Log("Set The SplashText to: " + text + " with TextIndex: " + CurrentlyShownText);
    }
}

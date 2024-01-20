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
    [SerializeField] int SzeneToLoadAfterSplashscreen;
    private int CurrentlyShownText = 1; // Needs to be clamped between 1 and 3
    private float CProgress = 0; // Current Progress of the Loading Screen
    private float LProgress = -1f; // Progress of the Loading Screen -10 Frames

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

        AsyncOperation operation = SceneManager.LoadSceneAsync(SzeneToLoadAfterSplashscreen); // Load the LoadingScreen Scene
        operation.allowSceneActivation = false; // 

        while (!operation.isDone)
        {
            CProgress = Mathf.Clamp01(operation.progress / 0.9f) * 100;

            if (CProgress != LProgress)
            {
                LProgress = CProgress;
                nextText("Loading Progress: " + LProgress + "%");
                for (int i = 0; i < 10; i++)
                {
                    yield return null; // Wartet auf das nächste Frame
                }
            } else if (CProgress == 100) 
            {
                nextText("Loading Complete!");
                for (int i = 0; i < 10; i++)
                {
                    yield return null; 
                }
                animator.SetBool("leave", true);
                for (int i = 0; i < 40; i++)
                {
                    yield return null; // Wartet auf das nächste Frame
                }
                operation.allowSceneActivation = true;

            } else    
            {
                yield return null; // Wartet auf das nächste Frame
            }
        }

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

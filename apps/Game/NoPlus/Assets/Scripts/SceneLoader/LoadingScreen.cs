using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using UnityEngine.Events;

public class LoadingScreen : MonoBehaviour
{
    // Important Stuff Done In the Loading Head
    public int VariationID;
    public bool Selected;
    public string target;

    public UnityEvent LoadingSequence;

    void Start()
    {
        GetComponent<CanvasGroup>().alpha = 0;
    }
    
    void Update()
    {
        if (Selected == true)
        {
            Selected = false;
            GetComponent<CanvasGroup>().alpha = 1;
            LoadingSequence.Invoke();

        }
    }
    
    
}

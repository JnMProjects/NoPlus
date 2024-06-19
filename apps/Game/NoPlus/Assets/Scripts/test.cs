using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class test : MonoBehaviour
{
    [SerializeField] Animator animator;
    void Start()
    {
        
        GetComponent<LoadScene>().Load("Lobby",0, animator);
        
    }
}

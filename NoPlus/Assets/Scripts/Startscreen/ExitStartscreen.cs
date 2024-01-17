using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ExitStartscreen : MonoBehaviour
{
    public Animator animator;
    public int LobbyBuildId = 1;

    private bool exitExecuted = false;

    // Start is called before the first frame update
    void Start()
    {
        animator.SetBool("Exit", false);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && !exitExecuted)
        {
            // Gib "Test" im Debug-Fenster aus
            StartCoroutine(DelayedExitAndLoad(LobbyBuildId, 1f)); // 1 Sekunde Verzögerung
            // Setze isSpacePressed auf true, um zu verhindern, dass dies wiederholt wird
            exitExecuted = true;
        }
    }

    IEnumerator DelayedExitAndLoad(int buildId, float delayTime)
    {
        // Warte für die angegebene Zeit, bevor das Animator-Bool gesetzt wird
        yield return new WaitForSeconds(delayTime);

        // Setze das Animator-Bool
        animator.SetBool("Exit", true);

        // Warte eine weitere Sekunde, bevor die Lobby geladen wird
        yield return new WaitForSeconds(1f);

        // Lade die Lobby
        AsyncOperation operation = SceneManager.LoadSceneAsync(buildId);
        yield return operation; // Warte darauf, dass die Operation abgeschlossen ist
    }
}

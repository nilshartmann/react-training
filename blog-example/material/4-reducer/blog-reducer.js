function blogReducer(oldState, action) {
  // Der State soll wie folgt aussehen:
  //   - loading: true/false oder nicht gesetzt
  //   - posts: Liste mit Blog-Posts oder leeres Array
  // Behandle folgende Action-Typen:
  //  - loadingStarted  (setzt loading auf true)
  //      - kein Payload notwendig
  //  - loadingFinished (setzt die geladenen Posts)
  //      - Payload: die Liste mit den geladenen Posts
  //        (die Liste einfach in den Zustand übernehmen)
  //  - addPost: fügt ein neues Post der Liste hinzu
  //      - Payload: ein einzelnes Post, so wie vom Server
  //        nach dem Speichern zurückgeliefert
  // Denk dran:
  //  - oldState darf nicht verändert werden (Kopien erzeugen!)
  //  - diese reducer-Funktion muss den aktualisierten Zustand zurückgeben
}

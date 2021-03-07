const initalDraftPost = {
  title: "",
  body: ""
};

export function clearDraft() {
  // todo: erzeuge ein Action-Objekt mit dem type editor/clearDraft und ohne weiteren Payload
}

export function setDraftBody(body) {
  // todo: erzeuge ein Action-Objekt mit dem type editor/setDraftBody und dem body-String als Payload
}

export function setDraftTitle(title) {
  // todo: erzeuge ein Action-Objekt mit dem type editor/setDraftTitle und dem title-String als Payload
}

export default function editorReducer(state = initalDraftPost, action) {
  // todo 1: entferne die folgende return-Anweisung ;)
  return null;

  // todo 2: implementiere den Reducer:
  // Der editor-State ist wie aus dem PostEditor bekannt ein Objekt mit folgender Struktur:
  // {
  //   title: "...",
  //   body: "..."
  // }
  // implementiere diese Reducer Funktion, abhängig vom action Typ:
  // - bei editor/clearDraft, soll ein leerer Zustand (leeres Post) zurückgegeben werden
  // - bei editor/setDraftBody, soll der body aus der Action in den State übernommen werden
  // - bei editor/setDraftTitle soll der title aus der Action in der State übernommen werden
  // was musst Du tun, wenn eine andere Action in diesen Reducer gelangt?
}

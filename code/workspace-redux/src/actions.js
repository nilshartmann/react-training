export function openDetailView() {
  return {
    type: "SET_MODE",
    mode: "MODE_DETAIL"
  };
}

export function openMasterView() {
  return {
    type: "SET_MODE",
    mode: "MODE_MASTER"
  };
}

// TODO: Implementiere den 'setFilter' Action Creator hier
// - Der Action Creator erwartet einen Parameter (den neuen Filter), der als Payload
//   an die Action übergeben werden soll
// - Der Typ der Action soll SET_FILTER sein.
// - Die Action soll also aus type und filter bestehen

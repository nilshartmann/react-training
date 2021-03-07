export function openEditor() {
  return {
    type: "mode/openEditor"
  };
}

export function openList() {
  return {
    type: "mode/openList"
  };
}

export default function viewReducer(state = "LIST", action) {
  switch (action.type) {
    case "mode/openEditor":
      return "ADD";
    case "mode/openList":
      return "LIST";
    default:
  }
  return state;
}

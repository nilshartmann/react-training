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

export const setFilter = filter => ({
  type: "SET_FILTER",
  filter
});

export const greetingReducer = (state = "Hello", action) => {
  switch (action.type) {
    case "RESET_GREETING":
      return "";
    case "UPDATE_GREETING":
      return action.payload;
  }
  return state;
};

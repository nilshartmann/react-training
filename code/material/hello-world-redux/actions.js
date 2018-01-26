export const resetGreeting = () => ({
  type: "RESET_GREETING"
});

/*
export const updateGreeting = greeting => ({
    type: 'UPDATE_GREETING',
    payload: greeting
});
*/

export const updateGreeting = greeting => dispatch => {
  setTimeout(
    () =>
      dispatch({
        type: "UPDATE_GREETING",
        payload: greeting
      }),
    100
  );
};

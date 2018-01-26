const BACKEND_URL = "http://localhost:7000/greetings";

/**
 * Saves a new greeting on the server using an HTTP POST request
 * @param {greeting} greetingToBeSaved - The Greeting object that should be inserted.
 * The object must not be null and must not contain an id property. The id will be generated on the server.
 * @param {function} onSuccess - A Callback function that is invoked when a successful response is received from the
 * server. The callback receives an object as its only parameter that has a property "id" that contains the server
 * generated id for the new greeting.
 * @param onFailure {function} onFailure - Callback function that is invoked when the server called failed
 * (due to technical or other reasons, like invalid request parameters). The callback will be invoked with one
 * parameter that contains an error message (string)
 */
export const saveToServer = (greetingToBeSaved, onSuccess, onFailure) => {
  // Four potential return "scenarios":
  // SCENARIO 1: Server responded, HTTP 201 => OK, as expected
  // SCENARIO 2: Server responded, HTTP != 201 => Server error (e.g. invalid data posted)
  // SCENARIO 3. Server does NOT respond at all (technical problems etc)
  // SCENARIO 4: An error occurs during the response handling (=> catch-handler will be invoked)

  const handleServerResponse = response =>
    response
      .json()
      .then(json => (response.status === 201 ? /* SCENARIO 1 */ onSuccess(json) : /* SCENARIO 2 */ onFailure(json.error)));

  /* SCENARIO 3 */
  const handleServerError = err => onFailure(err.message);

  /* SCENARIO 4
     * (might be the same as Scenario 3 in real life, just
     * to make it more explicit here as own scenario)
     */
  const handleUnexpectedError = err => onFailure("Unexpected error: " + err);

  return fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(greetingToBeSaved)
  })
    .then(handleServerResponse, handleServerError)
    .catch(handleUnexpectedError);
};

/**
 * Loads a list of all greetings from the server
 * @param onSuccess {function} A Callback function that is invoked when a successful response is received from the server.
 * The callback is invoked with one parameter: an Array of all greetings
 * @param onFailure {function} The callback function is invoked when the server call failed. The callback is invoked
 * with one parameter: a string with an error message
 */
export const loadFromServer = (onSuccess, onFailure) => {
  const handleServerResponse = response =>
    response.json().then(json => (response.status === 200 ? onSuccess(json) : onFailure(json.error)));
  const handleServerError = err => onFailure(err.message);
  const handleUnexpectedError = err => onFailure("Unexpected error: " + err);

  return fetch(BACKEND_URL)
    .then(handleServerResponse, handleServerError)
    .catch(handleUnexpectedError);
};

require("isomorphic-fetch");

// "NAIVE APPROACH": no check if response is 'ok' (i.e. HTTP 2xx)
// fetch('http://localhost:7000/greetings')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log("THIS SHOULD NOT HAPPEN", err));
//

// fetch('http://localhost:1234/greetings')
//     .then(response => response.json())
//     .then(json => console.log("THIS SHOULD NOT BE REACHED", json))
//     .catch(err => console.log("THIS SHOULD HAPPEN DUE TO WRONG URL", err));

fetch("http://localhost:7000/clienterror")
  .then(response => {
    // first extract the json that we receive in (hopefully) all cases
    return response.json().then(json => {
      if (response.ok) {
        return json;
      } else {
        throw { json, status: response.status };
      }
    });
  })
  .then(json => console.log("RECEIVED JSON", json))
  .catch(err => console.log("AN ERROR HAPPEND", err))
  .then(() => console.log("NOW WE'RE AT THE END"));

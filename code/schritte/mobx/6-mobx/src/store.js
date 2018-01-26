import { observable, computed, action } from "mobx";

import { aggregateGreetings, filterGreetings } from "./selectors";

const BACKEND_URL = "http://localhost:7000/greetings";
export const MODE_MASTER = "MODE_MASTER";
export const MODE_DETAIL = "MODE_DETAIL";

class Store {
  @observable greetings = [];
  @observable mode = MODE_MASTER;
  @observable filter = null;

  @computed
  get aggregatedGreetings() {
    return aggregateGreetings(this.greetings);
  }

  @computed
  get filteredGreetings() {
    return filterGreetings(this.greetings, this.filter);
  }

  @action.bound
  loadGreetings() {
    return fetch(BACKEND_URL)
      .then(response => response.json())
      .then(json => (this.greetings = json))
      .catch(err => console.error("LOADING GREETINGS FAILED:", err));
  }

  @action.bound
  saveGreeting(greetingToBeAdded) {
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(greetingToBeAdded)
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
        throw new Error("Invalid status code: " + response.status);
      })
      .then(json => {
        const newGreetingId = json.id;
        const newGreeting = { ...greetingToBeAdded, id: newGreetingId };

        this.greetings = [...this.greetings, newGreeting];
        this.mode = MODE_MASTER;
      });
  }

  @action.bound
  setFilter(filter) {
    if (this.filter === filter) {
      // reset filter when clicking again
      this.filter = null;
    } else {
      this.filter = filter;
    }
  }

  @action.bound
  setMode(mode) {
    this.mode = mode;
  }
}

export default new Store();

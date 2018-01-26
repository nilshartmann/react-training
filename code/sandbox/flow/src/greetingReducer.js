// @flow

import type { Action } from "./actions";
import { UPDATE_GREETING, RESET_GREETING } from "./actions";

export default function greetingReducer(state: string = "Hello", action: Action) {
  switch (action.type) {
    // ERROR: Type '"UPDATE_GRETING"' is not comparable to type '"UPDATE_GREETING" | "RESET_GREETING"'.
    // case 'UPDATE_GRETING':
    //     return action.payload;
    case UPDATE_GREETING:
      // ERROR: Property 'paylaod' does not exist on type 'UpdateGreetingAction'.
      // return action.paylaod;
      return action.payload;
    case RESET_GREETING:
      // ERROR: Property 'payload' does not exist on type 'ResetGreetingAction'.
      // return action.payload;
      return "";
    default:
      return state;
  }
}

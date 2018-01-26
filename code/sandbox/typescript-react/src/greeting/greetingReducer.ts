import { Action, UpdateGreetingAction, ResetGreetingAction, UPDATE_GREETING, RESET_GREETING } from "./actions";

type PartialState = string;

export default function greetingReducer(
  state: PartialState = "Hello",
  action: UpdateGreetingAction | ResetGreetingAction
): PartialState {
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

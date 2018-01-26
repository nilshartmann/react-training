export type GreetingChartData = { label: string; value: number }[];

export type GreetingId = string | number;

export type NewGreeting = {
  greeting: string;
  name: string;
};

export interface Greeting extends NewGreeting {
  id: GreetingId;
}

export type Greetings = Greeting[];
export type GreetingFilter = string | null;

export const MODE_MASTER = "MODE_MASTER";
export const MODE_DETAIL = "MODE_DETAIL";
export type Mode = typeof MODE_DETAIL | typeof MODE_MASTER;

export type GreetingState = Greetings;
export type FilterState = GreetingFilter;
export type ModeState = Mode;

/** The overall application state */
export type AppState = {
  greetings: GreetingState;
  filter: FilterState;
  mode: ModeState;
};

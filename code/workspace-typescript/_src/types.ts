export type GreetingChartData = { label: string; value: number }[];

export interface NewGreeting {
  greeting: string;
  name: string;
}

export interface Greeting extends NewGreeting {
  id: number;
}

export type Greetings = Greeting[];

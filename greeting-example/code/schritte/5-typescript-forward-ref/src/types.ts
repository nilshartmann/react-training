export type NewGreeting = {
  greeting: string;
  name: string;
};

export type Greeting = NewGreeting & {
  id: number;
};

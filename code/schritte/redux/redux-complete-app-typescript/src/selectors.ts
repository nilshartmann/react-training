import { GreetingChartData, Greetings, Greeting, GreetingFilter } from "./types";

export const filterGreetings = (greetings: Greetings, filter: GreetingFilter): Greetings =>
  filter ? greetings.filter(greeting => greeting.name === filter) : greetings;

export const aggregateGreetings = (greetings: Greetings): GreetingChartData => {
  type NameToValueMap = { [name: string]: number };
  // first create an object as map as it is easier to access
  const dataAsObjectMap: NameToValueMap = greetings.reduce((data: NameToValueMap, greeting: Greeting) => {
    const { name } = greeting;
    if (data[name]) {
      data[name] = data[name] + 1;
    } else {
      data[name] = 1;
    }
    return data;
  }, {});

  // then convert to data structure Chart expects
  return Object.keys(dataAsObjectMap).map(key => ({ label: key, value: dataAsObjectMap[key] }));
};

export const aggregateGreetings = greetings => {
  // first create an object as map as it is easier to access
  const dataAsObjectMap = greetings.reduce((data, greeting) => {
    const { name } = greeting;
    if (data[name]) {
      data[name] += 1;
    } else {
      data[name] = 1;
    }
    return data;
  }, {});

  // then convert to data structure Chart expects
  return Object.entries(dataAsObjectMap).map(entry => ({ label: entry[0], value: entry[1] }));
};

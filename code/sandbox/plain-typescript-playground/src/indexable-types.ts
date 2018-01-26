// https://www.typescriptlang.org/docs/handbook/interfaces.html
() => {
  // indexable type. Each KEY is a string, each VALUE is any
  type Entity = { [key: string]: any };

  const User: Entity = {
    name: "xxx"
  };

  // Make all props of an object optional
  type PartialObject<O> = { [KEY in keyof O]?: O[KEY] };

  class RestApi<O> {
    post(object: O) {
      return null;
    }

    put(partialObject: PartialObject<O>) {}
  }

  type person = {
    name: string;
    lastname: string;
  };

  const r = new RestApi<Person>();
  r.post({ name: "xx", lastname: "yy" });
  // r.put({ name: 'yyy', id: 123 });

  // define an object that has all keys of the given type O
  // and any of it's values of type S
  type MapperObject<O, S> = { [KEY in keyof O]: S };

  type Bike = {
    type: string;
    gears: number;
    ebike: boolean;
  };

  const DbColumnsForBike: MapperObject<Bike, string> = {
    type: "TYPE_COL",
    gears: "GEARS_COL",
    ebike: "EBIKE_COL"
  };
};

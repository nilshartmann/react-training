/* @flow */

import { normalize, denormalize, schema } from "normalizr";
import originalData from "./blogposts.json";

console.log(`Not normalized: ${JSON.stringify(originalData, null, "  ")}`);

const user = new schema.Entity("user");

const comment = new schema.Entity("comments", {
  commenter: user
});

const article = new schema.Entity(
  "articles",
  {
    author: user,
    comments: [comment]
  },
  {
    idAttribute: "name"
  }
);

const mySchema = { articles: [article] };

const normalizedData = normalize(originalData, mySchema);

console.log(`Normalized: ${JSON.stringify(normalizedData, null, "  ")}`);
console.log(`Entities: ${JSON.stringify(normalizedData.entities, null, "  ")}`);

const paul = normalizedData.entities.user["1"];
paul.name = "Paul II";

console.log(`Paul: ${JSON.stringify(paul, null, "  ")}`);

const input = {
  articles: ["strange"]
};

const denormalizedData = denormalize(input, mySchema, normalizedData.entities);

console.log(`Denormalized: ${JSON.stringify(denormalizedData, null, "  ")}`);

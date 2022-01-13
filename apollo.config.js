module.exports = {
  client: {
    includes: ["./blog-example/steps/9-graphql/src/**/*.{graphql,js}"],
    service: {
      name: "blog-example",
      url: "http://localhost:4000/graphql"
    }
  }
};

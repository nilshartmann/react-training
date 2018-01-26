const request = require("supertest");

const db = require("../src/db");
const app = require("../src/app")(db);

function expectError(res, code) {
  expect(res.status).toBe(code);
  expect(res.body.error).toBeDefined();
}

beforeEach(() => {
  db.initialize();
});

describe("GET", () => {
  test("GET /greetings should return all greetings", () => {
    return request(app)
      .get("/greetings")
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toMatchSnapshot();
      });
  });
  //
  test("GET /greetings/id should return a single greeting by id", () => {
    return request(app)
      .get("/greetings/2")
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toMatchSnapshot();
      });
  });
  //
  test("GET /greetings/id should return 404 for an unknown id", () => {
    return request(app)
      .get("/greetings/666")
      .then(response => {
        expectError(response, 404);
      });
  });
  //
  // });
  //
  describe("POST", () => {
    test("POST /greetings with new greeting should save it and return new id", () => {
      return request(app)
        .post("/greetings")
        .send({ name: "Moni", greeting: "Huhu!" })
        .then(res => {
          expect(res.status).toBe(201);
          expect(res.body).toMatchSnapshot();
          const newGreetingInDatabase = db._greetings[10];
          expect(newGreetingInDatabase).toEqual({
            id: 11,
            name: "Moni",
            greeting: "Huhu!"
          });
        });
    });

    test("POST /greetings with empty body  should fail with HTTP 400", () => {
      return request(app)
        .post("/greetings")
        .then(res => {
          expectError(res, 400);
        });
    });

    test("POST /greetings with empty name should fail with HTTP 400", () => {
      return request(app)
        .post("/greetings")
        .send({ greeting: "Huhu!" })
        .then(res => expectError(res, 400));
    });

    test("POST /greetings with empty greeting should fail with HTTP 400", () => {
      return request(app)
        .post("/greetings")
        .send({ name: "Moni" })
        .then(res => expectError(res, 400));
    });
  });
});

describe("EventEmitter", () => {
  const listener = jest.fn();

  test("received notification on insert", done => {
    listener.mockImplementation(() => done());
    db.on("insert", listener);
    db.insert({ greeting: "Hello", name: "Listener" });
  });

  afterEach(() => {
    db.removeListener("insert", listener);
  });
});

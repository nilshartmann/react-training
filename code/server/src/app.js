const express = require("express");
const bodyParser = require("body-parser");

const createApp = (db, largedata) => {
  const app = express();

  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

  app.use((req, _res, next) => {
    if (req.query.slow !== undefined) {
      // can't remember why I do this kind of math, but it seems to work 😱
      const timeout = (Math.floor(Math.random() * 4) + 2) * 250;
      console.log(`Slow down ${timeout}ms`);
      setTimeout(next, timeout);
    } else {
      next();
    }
  });

  // Return all greetings
  app.get("/greetings", (req, res) => res.json(db.findAll()));

  app.get("/greetingsslow", (req, res) => {
    setTimeout(() => res.json(db.findAll()), 1000);
  });

  // Return greeting with specified id (or 404)
  app.get("/greetings/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const greeting = db.findById(id);

    if (!greeting) {
      return res.status(404).json({ error: `Greeting '${id}' not found` });
    }

    return res.json(greeting);
  });

  app.get("/manygreetings", (req, res) => {
    return res.json(largedata);
  });

  app.get("/servererror", (req, res) => {
    return res.status(500).json({ error: "Ups. Server Error." });
  });

  app.get("/clienterror", (req, res) => {
    return res.status(400).json({ error: "Client Error!" });
  });

  // create new greeting
  app.post("/greetings", (req, res) => {
    const greeting = req.body;
    if (!greeting) {
      return res.status(400).json({ error: "Greeting must be defined" });
    }

    if (!greeting.name) {
      return res.status(400).json({ error: "greeting.name must be defined" });
    }

    if (!greeting.greeting) {
      return res.status(400).json({ error: "greeting.greeting must be defined" });
    }

    if (greeting.name === "a") {
      // slow down greetings with a
      // to show async problems in GreetingController

      setTimeout(() => {
        const newGreeting = db.insert(req.body);
        res.status(201).json(newGreeting);
      }, 10000);

      return;
    }

    const newGreeting = db.insert(req.body);
    res.status(201).json(newGreeting);
  });

  return app;
};

module.exports = createApp;

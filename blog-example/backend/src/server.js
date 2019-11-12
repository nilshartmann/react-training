const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let allPosts = [
  {
    id: "2",
    title: "Some notes from me",
    body: `I also believe it's important for every member to be involved and invested in our company and this is one way to do so. Curate.
        Guerrilla marketing we don't want to boil the ocean we need to leverage our synergies touch base
        The sprint is over please use "solutionise" instead of solution ideas! :)
        Push back digitalize yet enough to wash your face, or low-hanging fruit horsehead offer, for Bob called an all-hands this afternoon that ipo will be a game-changer.
        `
  },
  {
    id: "1",
    title: "To be or not to be",
    body: `Self law truth moral will gains. Marvelous self burying battle virtues eternal-return.
        Chaos of madness ultimate moral moral play victorious faith ubermensch pious will.
        Zarathustra will burying christianity enlightenment decrepit christian ocean gains. Good ocean strong  grandeur free superiority zarathustra selfish inexpedient reason.
        Decrepit ultimate chaos.
        `
  }
];

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

app.get("/posts", (req, res) =>
  req.query.short !== undefined
    ? res.json(allPosts.map(p => ({ id: p.id, title: p.title })))
    : res.json(allPosts)
);

// Return Post with specified id (or 404)
app.get("/posts/:id", (req, res) => {
  const post = allPosts.find(p => p.id === req.params.id);

  if (!post) {
    return res.status(404).json({ error: `Post '${req.params.id}' not found` });
  }

  return res.json(post);
});

app.post("/posts", (req, res) => {
  const post = req.body;
  if (!post) {
    return res.status(400).json({ error: "Post must be defined" });
  }

  if (!post.title) {
    return res.status(400).json({ error: "post.title must be defined" });
  }

  if (!post.body) {
    return res.status(400).json({ error: "post.body must be defined" });
  }

  const newPost = {
    ...post,
    id: String(allPosts.length + 3)
  };

  allPosts = [newPost, ...allPosts];

  res.status(201).json(newPost);
});

app.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;
  allPosts = allPosts.filter(p => p.id !== postId);
  res.sendStatus(200);
});

const port = process.env.SERVER_PORT || 7000;

app.listen(port, () => {
  console.log(`
    📞    Blogging API Server listening on port ${port}
    👉    Try http://localhost:${port}/posts
`);
});

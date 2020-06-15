const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");

const datastore = require("./datastore");

const app = express();

const authEnabled = process.env.USE_AUTH === "true";
/** IN REAL LIVE YOU WILL NEVER STORE JWT_SECRET IN YOUR CODE! */
const JWT_SECRET = "hurzelpurzel";

function tokenFor(userId) {
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "10 years"
  });

  return token;
}

app.use(bodyParser.json());

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,PATCH,DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use((req, _res, next) => {
  if (req.query.slow !== undefined) {
    // can't remember why I do this kind of math, but it seems to work 😱
    const timeout = (Math.floor(Math.random() * 4) + 2) * 550;
    console.log(`Slow down ${timeout}ms`);
    setTimeout(next, timeout);
  } else {
    next();
  }
});

if (authEnabled) {
  app.use((req, _res, next) => {
    const token = req.headers.authorization;
    if (token) {
      const payload = jwt.verify(token, JWT_SECRET);
      const user = datastore.getUser(payload.userId);
      if (!user) {
        return res.status(401).json({ error: `User with id '${payload.userId}' not found` });
      }
      req.user = user;
      req.userId = user.id;
    }
    next();
  });

  app.post("/login", (req, res) => {
    const login = req.body;

    if (!login) {
      return res.status(400).json({ error: "login (payload) must be defined" });
    }

    if (!login.login) {
      return res.status(400).json({ error: "login.login must be defined" });
    }

    if (!login.password) {
      return res.status(400).json({ error: "login.password must be defined" });
    }

    const user = datastore.getUserByLogin(login.login);

    if (!user) {
      return res.status(403).json({ error: "Invalid user" });
    }

    return res.status(200).json({
      token: tokenFor(user.id),
      user
    });
  });
}

app.get("/posts", (req, res) => {
  let result;
  if (req.query.short !== undefined) {
    result = datastore.getAllPosts().map(p => ({ id: p.id, date: p.date, title: p.title }));
  } else if (req.query.full !== undefined) {
    result = datastore.getAllPosts().map(p => ({
      ...p,
      author: datastore.getUser(p.userId).name
    }));
  } else {
    result = datastore.getAllPosts();
  }

  if (req.query.orderBy === "newestFirst") {
    result.sort(datastore.orderByDateNewestFirst);
  } else if (req.query.orderBy === "oldestFirst") {
    result.sort(datastore.orderByDateOldestFirst);
  } else if (req.query.orderBy === "date") {
    if (req.query.direction === "desc") {
      result.sort(datastore.orderByDateNewestFirst);
    } else {
      result.sort(datastore.orderByDateOldestFirst);
    }
  } else if (req.query.orderBy === "likes") {
    if (req.query.direction === "desc") {
      result.sort((p1, p2) => p1.likes - p2.likes);
    } else {
      result.sort((p1, p2) => p2.likes - p1.likes);
    }
  } else if (req.query.orderBy === "author") {
    result.sort((p1, p2) => {
      if (!p1.author || !p2.author) {
        // fallback if author is not requested/found
        return datastore.orderByDateNewestFirst(p1, p2);
      }

      const r = p1.author.localeCompare(p2.author);
      if (r === 0) {
        return datastore.orderByDateNewestFirst(p1, p2);
      }

      return r;
    });
  }

  res.status(200).json(result);
});

app.get("/most-liked-posts", (req, res) => {
  const orderByLikes = (p1, p2) => p2.likes - p1.likes;

  res.status(200).json(datastore.getAllPosts(orderByLikes).slice(0, 5));
});

app.get("/recommendations", (req, res) => {
  const allPosts = datastore.getAllPosts(undefined, req.userId);
  const recommendations = [];

  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(allPosts.length));
  }

  while (recommendations.length < 5) {
    recommendations.push(allPosts.splice(getRandomInt(), 1));
  }

  res.status(200).json(recommendations);
});

// Return Post with specified id (or 404)
app.get("/posts/:id", (req, res) => {
  const post = datastore.getPost(req.params.id);

  if (!post) {
    return res.status(404).json({ error: `Post '${req.params.id}' not found` });
  }

  const user = datastore.getUser(post.userId);
  if (!user) {
    return res.status(404).json({ error: `User '${post.userId}' not found` });
  }

  return res.status(200).json({ ...post, user });
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = datastore.getUser(userId);
  if (!user) {
    return res.status(404).json({ error: `User '${userId}' not found` });
  }

  return res.status(200).json(user);
});

/** Some "metadata" (just more data about a post, to provide another endpoint) */
app.get("/posts/:id/metadata", (req, res) => {
  const post = datastore.getPost(req.params.id);

  if (!post) {
    return res.status(404).json({ error: `Post '${req.params.id}' not found` });
  }

  const user = datastore.getUser(post.userId);
  if (!user) {
    return res.status(404).json({ error: `User '${post.userId}' not found` });
  }

  return res.status(200).json({
    postId: post.id,
    userId: user.id,
    likes: post.likes,
    publishedAt: post.date,
    username: user.name
  });
});

app.post("/posts", (req, res) => {
  if (authEnabled && !req.user) {
    return res.status(401).json({ error: "You must be logged in to execute this action" });
  }

  const post = req.body;
  if (!post) {
    return res.status(400).json({ error: "Post must be defined" });
  }

  if (!post.title) {
    return res.status(400).json({ error: "post.title must be defined and not empty" });
  }

  if (!post.body) {
    return res.status(400).json({ error: "post.body must be defined and not empty" });
  }

  const newPost = datastore.insertPost(req.userId, post);

  if (post.title.startsWith("slow")) {
    // slow down greetings with a
    // to show async problems in App

    setTimeout(() => {
      res.status(201).json(newPost);
    }, 10000);

    return;
  }

  res.status(201).json(newPost);
});

app.post("/posts/:id/like", (req, res) => {
  const post = datastore.getPost(req.params.id);

  if (!post) {
    return res.status(404).json({ error: `Post '${req.params.id}' not found` });
  }

  if (post.id === "P9") {
    // simluation: error in processing
    return res.status(200).json({
      postId: post.id,
      likedBy: post.likedBy,
      likes: post.likes,
    });
  }

  const likedPost = datastore.likePost(post.id, req.userId);
  res.status(200).json({
    postId: likedPost.id,
    likedBy: likedPost.likedBy,
    likes: likedPost.likes,
  });
});

app.put("/posts", (req, res) => {
  if (authEnabled && !req.user) {
    return res.status(401).json({ error: "use must be logged in to execute this action" });
  }

  const post = req.body;
  if (!post) {
    return res.status(400).json({ error: "Post must be defined" });
  }

  if (!post.id) {
    return res.status(400).json({ error: "post.id must be defined" });
  }

  if (!post.title) {
    return res.status(400).json({ error: "post.title must be defined" });
  }

  if (!post.body) {
    return res.status(400).json({ error: "post.body must be defined" });
  }

  const updatedPost = datastore.updatePost(post);

  console.log("UPDATE", updatedPost);

  if (!updatedPost) {
    return res.status(404).json({ error: `Post with id ${post.id} not found` });
  }
  res.status(200).json(updatedPost);
});

app.delete("/posts/:id", (req, res) => {
  if (authEnabled && !req.user) {
    return res.status(401).json({ error: "use must be logged in to execute this action" });
  }

  const postId = req.params.id;
  if (!postId) {
    return res.status(400).json({ error: "postId must be defined in the URL" });
  }

  if (!datastore.deletePost(postId)) {
    return res.status(404).json({ error: `Post with id ${postId} not found` });
  }
  res.sendStatus(200);
});

const port = process.env.SERVER_PORT || 7000;

app.listen(port, () => {
  const authHints = authEnabled
    ? `
    🚓    Auth Mode is enabled
    🔑    Auth-Header: 'Authorization: ${tokenFor("U2")}'`
    : "";

  console.log(`
    📞    Blogging API Server listening on port ${port}${authHints}
    👉    Try http://localhost:${port}/posts
`);
});

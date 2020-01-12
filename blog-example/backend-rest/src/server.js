const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
let allPosts = [
  {
    id: "8",
    date: "2019-10-23T18:25:43.511Z",
    title: "Consider async/await over promises",
    body: `I also believe it's important for every member to be involved and invested in our company and this is one way to do so. Curate.
        Guerrilla marketing we don't want to boil the ocean we need to leverage our synergies touch base
        The sprint is over please use "solutionise" instead of solution ideas! :)
        Push back digitalize yet enough to wash your face, or low-hanging fruit horsehead offer, for Bob called an all-hands this afternoon that ipo will be a game-changer.
        `
  },
  {
    id: "7",
    date: "2019-11-22T14:12:21.511Z",
    title: "Learning React...",
    body: `Self law truth moral will gains. Marvelous self burying battle virtues eternal-return.
        Chaos of madness ultimate moral moral play victorious faith ubermensch pious will.
        Zarathustra will burying christianity enlightenment decrepit christian ocean gains. Good ocean strong  grandeur free superiority zarathustra selfish inexpedient reason.
        Decrepit ultimate chaos.
        `
  },
  {
    id: "6",
    date: "2019-06-12T14:10:22.666Z",
    title: "Do's and don'ts when using React Router",
    body: `Burying marvelous good against spirit passion reason. Value hope superiority derive hatred justice eternal-return zarathustra revaluation fearful christianity faith abstract hope.
Depths transvaluation joy fearful sea. Prejudice god merciful hope intentions sexuality oneself revaluation contradict christianity war philosophy passion. Convictions of of free insofar battle intentions ascetic decieve derive good. Madness sexuality deceptions faithful christianity victorious.
Will victorious self against madness holiest right against ultimate reason revaluation god decieve. Inexpedient law eternal-return convictions sexuality love play marvelous enlightenment joy. Ultimate reason evil christian pinnacle endless contradict. Snare love horror overcome ascetic revaluation enlightenment derive sea overcome. Derive of horror disgust truth revaluation deceptions play disgust god morality abstract passion pious. Against dead reason faithful ocean hope abstract of pinnacle.
Chaos law hope endless ocean virtues ascetic. Transvaluation deceptions intentions justice hatred salvation good war society justice. Ultimate pious selfish virtues strong love contradict god grandeur enlightenment.`
  },
  {
    id: "5",
    date: "2019-07-07T12:22:22.666Z",
    title: "Gotchas of React Hooks API",
    body: `Eat all the power cords get scared by sudden appearance of cucumber for howl uncontrollably for no reason yet i cry and cry and cry unless you pet me, and then maybe i cry just for fun pooping rainbow while flying in a toasted bread costume in space. 
    Meow for food, then when human fills food dish, take a few bites of food and continue meowing behind the couch, so sit in a box for hours but find a way to fit in tiny box you have cat to be kitten me right meow for make meme, make cute face.
`
  },
  {
    id: "4",
    date: "2019-07-12T13:22:22.666Z",
    title: "GraphQL primer",
    body: `Swine bresaola porchetta drumstick. 
    Doner flank pork, burgdoggen jerky venison bresaola corned beef landjaeger t-bone hamburger pastrami tenderloin. 
    Short ribs chuck andouille cow t-bone doner ribeye tail bacon shank meatloaf pork tenderloin capicola frankfurter. 
    Andouille hamburger pastrami, cow bacon kielbasa chicken pancetta sirloin landjaeger pork belly.`
  },
  {
    id: "2",
    date: "2019-08-23T18:25:43.511Z",
    title: "Writing React applications using TypeScript",
    body: `I also believe it's important for every member to be involved and invested in our company and this is one way to do so. Curate.
        Guerrilla marketing we don't want to boil the ocean we need to leverage our synergies touch base
        The sprint is over please use "solutionise" instead of solution ideas! :)
        Push back digitalize yet enough to wash your face, or low-hanging fruit horsehead offer, for Bob called an all-hands this afternoon that ipo will be a game-changer.
        `
  },
  {
    id: "1",
    date: "2019-09-22T14:12:21.511Z",
    title: "Modern Frontend Development",
    body: `Self law truth moral will gains. Marvelous self burying battle virtues eternal-return.
        Chaos of madness ultimate moral moral play victorious faith ubermensch pious will.
        Zarathustra will burying christianity enlightenment decrepit christian ocean gains. Good ocean strong  grandeur free superiority zarathustra selfish inexpedient reason.
        Decrepit ultimate chaos.
        `
  }
];

let counter = allPosts.length + 1000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,PATCH,DELETE");
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

function sortByDate(posts) {
  return posts.slice().sort((p1, p2) => new Date(p2.date).getTime() > new Date(p1.date).getTime());
}

app.get("/posts", (req, res) =>
  res.json(
    sortByDate(
      req.query.short !== undefined
        ? allPosts.map(p => ({ id: p.id, date: p.date, title: p.title }))
        : allPosts
    )
  )
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
    id: String(counter++),
    date: new Date().toJSON()
  };

  if (post.title.startsWith("slow")) {
    // slow down greetings with a
    // to show async problems in App

    setTimeout(() => {
      allPosts = [newPost, ...allPosts];
      res.status(201).json(newPost);
    }, 10000);

    return;
  }

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

const fs = require("fs");

function readPosts() {
  const posts = new Map();
  const newPost = () => ({
    id: `P${posts.size + 1}`,
    body: "",
    likedBy: [],
  });
  let currentPost = newPost();

  const storeCurrentPost = () => {
    posts.set(currentPost.id, currentPost);
    currentPost = newPost();
  };

  try {
    // read contents of the file
    const data = fs.readFileSync("./src/.example-posts.txt", "UTF-8");

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
      line = line.trim();
      if (line.startsWith("---")) {
        storeCurrentPost();
      } else if (line.startsWith("title:")) {
        currentPost.title = line.substring("title:".length).trim();
        currentPost.likes = currentPost.title.length;
      } else if (line.startsWith("date:")) {
        currentPost.date = line.substring("date:".length).trim();
      } else if (line.startsWith("user:")) {
        currentPost.userId = line.substring("user:".length).trim();
      } else if (line.startsWith("published:")) {
        currentPost.published = line.substring("published:".length).trim() === "true";
      } else if (line === "") {
        currentPost.body = currentPost.body + "\n";
      } else {
        currentPost.body = currentPost.body + line;
      }
    });

    storeCurrentPost();
  } catch (err) {
    console.error(err);
  }

  return posts;
}

function readUsers() {
  return [
    { id: "U1", login: "nils", name: "Nils Hartmann" },
    { id: "U2", login: "susi", name: "Susi Mueller" },
    { id: "U3", login: "klaus", name: "Klaus Schneider" },
    { id: "U4", login: "sue", name: "Sue Taylor" },
    { id: "U5", login: "lauren", name: "Lauren Jones" },
    { id: "U6", login: "olivia", name: "Olivia Smith" },
    { id: "U7", login: "cathy", name: "Cathy Brown" },
    { id: "U8", login: "maja", name: "Maja Walsh" },
  ];
}

module.exports = {
  readPosts,
  readUsers,
};

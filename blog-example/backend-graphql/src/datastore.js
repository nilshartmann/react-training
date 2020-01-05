const { readPosts, readUsers } = require("./example-post-reader");
/** User
 *  @typedef {Object} User
 *  @property {string} id - The unique id
 *  @property {string} login - The login
 *  @property {string} name - The fullname of this User
 */

/** BlogPost
 *  @typedef {Object} BlogPost
 *  @property {string} id - The unique id
 *  @property {string} title - The title
 *  @property {string} date - Publication date
 *  @property {string} body - Body
 *  @property {string} userId - Reference to user
 *  @property {number} likes - Likes!
 */

/** @type {User[]} */
const users = readUsers();
/** @type {Map<string,BlogPost>} */
const posts = readPosts();

function getAllPosts() {
  return posts.values();
}

function getPost(postId) {
  return posts.get(postId);
}

function getAllUsers() {
  return users;
}

function getUser(userId) {
  return users.find(u => u.id === userId);
}

function getUserByLogin(login) {
  return users.find(u => u.login === login);
}

function likePost(postId) {
  const post = posts.get(postId);

  if (!post) {
    throw new Error(`Cannot find BlogPost '${postId}'`);
  }

  posts.set(postId, {
    ...post,
    likes: post.likes + 1
  });

  return post;
}

function insertPost(userId, { title, body }) {
  const newPost = {
    userId,
    title,
    body,
    likes: 0,
    date: new Date().toISOString(),
    id: `P${posts.size + 1}`
  };

  posts.set(newPost.id, newPost);

  return newPost;
}

module.exports = {
  getAllPosts,
  getAllUsers,
  getUser,
  getUserByLogin,
  insertPost,
  likePost,
  getPost
};

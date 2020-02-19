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

const orderByDateNewestFirst = (p1, p2) => new Date(p2.date) - new Date(p1.date);
const orderByDateOldestFirst = (p1, p2) => new Date(p1.date) - new Date(p2.date);

function getAllPosts(orderByFn = orderByDateNewestFirst) {
  const allPosts = [...posts.values()];
  allPosts.sort(orderByFn);

  return allPosts;
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

  const updatedPost = {
    ...post,
    likes: post.likes + 1
  };

  posts.set(postId, updatedPost);

  return updatedPost;
}

function updatePost(postData) {
  const post = posts.get(postData.id);

  if (!post) {
    return null;
  }

  const updatedPost = {
    ...post,
    title: postData.title,
    body: postData.body
  };

  posts.set(post.id, updatedPost);

  return updatedPost;
}

function deletePost(postId) {
  return posts.delete(postId);
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
  updatePost,
  deletePost,
  likePost,
  getPost,

  orderByDateOldestFirst,
  orderByDateNewestFirst
};

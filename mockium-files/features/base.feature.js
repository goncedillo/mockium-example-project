const userMocks = require("../mocks/users/users.mock");
const postMocks = require("../mocks/posts/posts.mock");

module.exports = {
  name: "base",
  mocks: [userMocks, postMocks]
};

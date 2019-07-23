const getAllPosts = {
  url: "/posts",
  method: "GET",
  response: {
    status: 200,
    body: {
      posts: [
        {
          id: 1,
          title: "Post 1 title",
          text: "Post 1 text"
        },
        {
          id: 2,
          title: "Post 2 title",
          text: "Post 2 text"
        },
        {
          id: 3,
          title: "Post 3 title",
          text: "Post 3 text"
        }
      ]
    }
  }
};

const getPost = {
  url: "/posts/:id",
  method: "GET",
  response: {
    status: 200,
    body: {
      posts: {
        id: 1,
        title: "Post 1 title",
        text: "Post 1 text"
      }
    }
  }
};

module.exports = {
  getAllPosts,
  getPost
};

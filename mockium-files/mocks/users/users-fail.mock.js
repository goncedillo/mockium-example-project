const getAllUsersFail = {
  url: "/users",
  method: "GET",
  response: {
    status: 400,
    body: { error: "Some error in the request" }
  }
};

const getUserNotExists = {
  url: "/user/:id",
  method: "GET",
  response: {
    status: 404,
    body: {}
  }
};

module.exports = {
  getAllUsersFail,
  getUserNotExists
};

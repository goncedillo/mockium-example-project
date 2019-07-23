const getAllUsers = {
  url: "/users",
  method: "GET",
  response: {
    status: 200,
    body: {
      users: [
        {
          id: 1,
          name: "Johny Cash"
        },
        {
          id: 2,
          name: "Elvis Presley"
        }
      ]
    }
  }
};

const getUser = {
  url: "/users/:id",
  method: "GET",
  response: {
    status: 200,
    body: {
      id: 1,
      name: "Johny Cash"
    }
  }
};

const createUser = {
  url: "/users",
  method: "POST",
  response: {
    status: 201,
    body: null
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser
};

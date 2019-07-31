// This mocks will overwrite the regular en 'base' feature

export const getAllUsersBasket = {
  url: "/users",
  method: "GET",
  response: {
    status: 200,
    body: request => {
      if (request.query.position === "pivot") {
        return {
          users: [
            {
              id: 1,
              name: "Marc Gasol"
            },
            {
              id: 2,
              name: "Joel Embiid"
            }
          ]
        };
      }

      return {
        users: [
          {
            id: 1,
            name: "Michael Jordan"
          },
          {
            id: 2,
            name: "Lebron James"
          }
        ]
      };
    }
  }
};

export const getUserBasket = {
  url: "/users/:id",
  method: "GET",
  response: {
    status: 200,
    body: {
      id: 1,
      name: "Michael Jordan"
    }
  }
};

export const createUserBasket = {
  url: "/users",
  method: "POST",
  response: {
    status: 201,
    body: { basket: true }
  }
};

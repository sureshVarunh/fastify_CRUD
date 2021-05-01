const { userController } = require("../../controller/users/users");
const {
  addUserSchema,
  updateUserSchema,
  getUserByIdSchema,
  deleteUserSchema
} = require("../../schemas/userSchema");

const userRoutes = async fastify => {
  fastify.post("/users", { schema: addUserSchema }, userController.addUser);

  fastify.put(
    "/users/:id",
    { schema: updateUserSchema },
    userController.updateUser
  );

  fastify.delete(
    "/users/:id",
    { schema: deleteUserSchema },
    userController.deleteUser
  );
  fastify.get("/users", userController.getAllUsers);

  fastify.get(
    "/users/:id",
    { schema: getUserByIdSchema },
    userController.getUserById
  );
};

module.exports = { userRoutes };

const { userRoutes } = require("./userRoutes/userRoutes");
const { blogRoutes } = require("./blogRoutes/blogRoutes");

const routes = fastify => {
  userRoutes(fastify), blogRoutes(fastify);
};
module.exports = { routes };

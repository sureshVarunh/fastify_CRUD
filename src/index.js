const fastify = require("fastify")({ logger: true });
const { dbConnector } = require("./config/db");
const { routes } = require("./routes/");

// Database connection
dbConnector(fastify);

// Default test route
fastify.get("/", function (req, reply) {
  console.log("HELLO VARUN GOOD EVENING");
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ MESSAGE: "HELLO VARUN GOOD EVENING" });
});

// Routes declarations
routes(fastify);

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // fastify.log.info(`Server listening on ${address}`);
});

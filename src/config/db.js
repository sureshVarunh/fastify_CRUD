const mongoose = require("mongoose");

async function dbConnector(fastify, options) {
  try {
    const url = `mongodb://localhost:27017/fastify_example`;
    const db = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    fastify.log.info("Database is connected");
  } catch (err) {
    fastify.log.error(err);
  }
}

module.exports = { dbConnector };

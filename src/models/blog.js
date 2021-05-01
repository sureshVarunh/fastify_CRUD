const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  name: String,
  author_id: String,
  descrition: String,
  is_deleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

const blogModel = mongoose.model("blogs", blogSchema);

module.exports = blogModel;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  address1: String,
  address2: String,
  is_deleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

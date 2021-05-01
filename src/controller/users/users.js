const usersInfo = require("./usersInfo");
const userModel = require("../../models/user");

const userController = {};

userController.getAllUsers = async (req, reply) => {
  const result = await userModel.find({ is_deleted: false });
  return result;
};

userController.getUserById = async (req, reply) => {
  const uId = req.params.id;
  const result = await userModel.findOne({ _id: uId, is_deleted: false });
  return result;
};

userController.addUser = async (req, reply) => {
  const userData = new userModel(req.body);
  const result = await userData.save();
  return result;
};

userController.updateUser = async (req, reply) => {
  const newData = req.body;
  newData.updatedAt = Date.now();
  const uId = req.params.id;
  const result = await userModel.updateOne(
    {
      _id: uId
    },
    newData
  );
  if (result.n > 0) {
    const res = await userModel.findOne({ _id: uId, is_deleted: false });
    return res;
  }
};

userController.deleteUser = async (req, reply) => {
  const uId = req.params.id;
  const result = await userModel.updateOne(
    {
      _id: uId
    },
    { is_deleted: true }
  );
  if (result.n > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = { userController };

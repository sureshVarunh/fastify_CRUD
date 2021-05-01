const blogInfo = require("./blogInfo");
const blogModel = require("../../models/blog");

const blogController = {};

blogController.getAllBlogs = async (req, reply) => {
  const result = await blogModel.find({ is_deleted: false });
  return result;
};

blogController.getBlogById = async (req, reply) => {
  const bId = req.params.id;
  const result = await blogModel.findOne({ _id: bId, is_deleted: false });
  return result;
};

blogController.addBlog = async (req, reply) => {
  const blogData = new blogModel(req.body);
  const result = await blogData.save();
  return result;
};

blogController.updateBlog = async (req, reply) => {
  const bId = req.params.id;
  const newData = req.body;
  const result = await blogModel.updateOne(
    {
      _id: bId
    },
    newData
  );
  if (result.n > 0) {
    const result = await blogModel.findOne({ _id: bId, is_deleted: false });
    return result;
  }
};

blogController.deleteBlog = async (req, reply) => {
  const bId = req.params.id;
  const result = await blogModel.updateOne(
    {
      _id: bId
    },
    { is_deleted: true }
  );
  if (result.n > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = { blogController };

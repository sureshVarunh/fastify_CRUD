const { blogController } = require("../../controller/blogs/blog");
const {
  getBlogByIdSchema,
  deleteBlogSchema,
  addBlogSchema,
  updateBlogSchema
} = require("../../schemas/blogSchema");

const blogRoutes = async fastify => {
  fastify.post("/blogs", { schema: addBlogSchema }, blogController.addBlog);

  fastify.get("/blogs", blogController.getAllBlogs);

  fastify.get(
    "/blogs/:id",
    { schema: getBlogByIdSchema },
    blogController.getBlogById
  );

  fastify.put(
    "/blogs/:id",
    { schema: updateBlogSchema },
    blogController.updateBlog
  );

  fastify.delete(
    "/blogs/:id",
    { schema: deleteBlogSchema },
    blogController.deleteBlog
  );
};

module.exports = { blogRoutes };

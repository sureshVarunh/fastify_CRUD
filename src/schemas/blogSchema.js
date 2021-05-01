const getBlogByIdSchema = {
  params: {
    id: { type: "string" }
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: { type: "integer" },
        name: { type: "string" },
        author_id: { type: "string" },
        descrition: { type: "string" },
        is_deleted: { type: "boolean" }
      }
    }
  }
};

const deleteBlogSchema = {
  params: {
    id: { type: "string" }
  },
  response: {
    200: {
      type: "boolean"
    }
  }
};

const addBlogSchema = {
  body: {
    type: "object",
    required: ["name","author_id"],
    properties: {
      name: { type: "string" },
      author_id: { type: "string" },
      descrition: { type: "string" },
      is_deleted: { type: "boolean" }
    }
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: { type: "string" },
        name: { type: "string" },
        author_id: { type: "string" },
        descrition: { type: "string" },
        is_deleted: { type: "boolean" }
      }
    }
  }
};

const updateBlogSchema = {
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      author_id: { type: "string" },
      descrition: { type: "string" },
      is_deleted: { type: "boolean" }
    }
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: { type: "string" },
        name: { type: "string" },
        author_id: { type: "string" },
        descrition: { type: "string" },
        is_deleted: { type: "boolean" }
      }
    }
  }
};

module.exports = {
  getBlogByIdSchema,
  deleteBlogSchema,
  addBlogSchema,
  updateBlogSchema
};

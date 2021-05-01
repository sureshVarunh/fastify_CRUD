const getUserByIdSchema = {
  params: {
    id: { type: "string" }
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: { type: "integer" },
        name: { type: "string" },
        address1: { type: "string" },
        address2: { type: "string" },
        is_deleted: { type: "boolean" },
      }
    }
  }
};

const deleteUserSchema = {
  params: {
    id: { type: "string" }
  },
  response: {
    200: {
      type: "boolean"
    }
  }
};

const addUserSchema = {
  body: {
    type: "object",
    required: ["name", "address1"],
    properties: {
      name: { type: "string" },
      address1: { type: "string" },
      address2: { type: "string" }
    }
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: { type: "string" },
        name: { type: "string" },
        address1: { type: "string" },
        address2: { type: "string" },
        is_deleted: { type: "boolean" },
      }
    }
  }
};

const updateUserSchema = {
  body: {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "string" },
      name: { type: "string" }
    }
  },
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "string" },
        name: { type: "string" },
        address1: { type: "string" },
        address2: { type: "string" },
        is_deleted: { type: "boolean" },
      }
    }
  }
};

module.exports = {
  getUserByIdSchema,
  addUserSchema,
  updateUserSchema,
  deleteUserSchema
};

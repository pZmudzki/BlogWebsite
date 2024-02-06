const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = new mongoose.model("Comment", commentSchema);

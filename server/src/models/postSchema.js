const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: [
    {
      type: String,
    },
  ],
  videoUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  views: {
    type: Number,
    default: 0,
  },
  archived: {
    type: Boolean,
    default: false,
  },
});

module.exports = new mongoose.model("Post", postSchema);

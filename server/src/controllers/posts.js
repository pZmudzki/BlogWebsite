const Post = require("../models/postSchema");

const getPost = async (req, res) => {
  try {
    const { id } = req.query;
    const posts = await Post.findOne({ _id: id });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: "Błąd w pobieraniu treści" });
  }
};

const getPosts = async (req, res) => {
  try {
    const { type } = req.params;
    const posts = await Post.find({ type: type });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: "Błąd w pobieraniu treści" });
  }
};

module.exports = { getPost, getPosts };

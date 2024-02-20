const Comment = require("../models/Comment");

const addComment = async (req, res) => {
  try {
    // const { postId, name, email, comment } = req.body;
    const comment = req.body;
    const newComment = await Comment.create(comment);
    res.status(201).json(newComment);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ error: "Błąd w dodawaniu komentarza" });
  }
};

module.exports = { addComment };

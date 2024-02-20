const Comment = require("../models/commentSchema");

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

const getComments = async (req, res) => {
  try {
    const { postId } = req.query;
    const comments = await Comment.find({ postId: postId });
    res.status(200).json(comments);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: "Błąd w pobieraniu komentarzy" });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(id, comment, {
      new: true,
    });
    res.status(200).json(updatedComment);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: "Błąd w aktualizacji komentarza" });
  }
};

module.exports = { addComment, getComments, updateComment };

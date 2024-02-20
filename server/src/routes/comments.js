const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const {
  addComment,
  getComments,
  updateComment,
} = require("../controllers/comments");

router.post("", addComment);
router.get("/:postId", getComments);
router.put("/:id", auth, updateComment);

module.exports = router;

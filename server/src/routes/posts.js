const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const {
  getPost,
  getPosts,
  addPost,
  updatePost,
} = require("../controllers/posts");

router.post("", auth, addPost);
router.get("/post/:id", getPost);
router.put("/post/:id", auth, updatePost);
router.get("/:type", getPosts);

module.exports = router;

const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const {
  getPost,
  getPosts,
  addPost,
  getLatestPost,
} = require("../controllers/posts");

router.post("", auth, addPost);
router.get("/:id", getPost);
router.get("", getLatestPost);
router.get("/:type", getPosts);

module.exports = router;

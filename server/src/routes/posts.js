const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const { getPost, getPosts, addPost } = require("../controllers/posts");

router.post("", auth, addPost);
router.get("/:id", getPost);
router.get("/:type", getPosts);

module.exports = router;

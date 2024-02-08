const express = require("express");
const router = express.Router();
const { getPost, getPosts } = require("../controllers/posts");

router.get("/:id", getPost);
router.get("/:type", getPosts);

module.exports = router;

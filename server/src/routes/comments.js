const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const { addComment, getComments } = require("../controllers/comments");

router.post("", addComment);
router.get("/postId", getComments);

module.exports = router;

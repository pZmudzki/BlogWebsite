const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const { addComment } = require("../controllers/comments");

router.post("", addComment);

module.exports = router;

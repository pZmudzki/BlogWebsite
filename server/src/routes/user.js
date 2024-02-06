const express = require("express");
const router = express.Router();
const {
  // register,
  login,
  logout,
} = require("../controllers/user");

router.post("/login", login);
router.get("/logout", logout);
// router.post("/register", register);

module.exports = router;

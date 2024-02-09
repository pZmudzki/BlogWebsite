const express = require("express");
const router = express.Router();
const {
  // register,
  login,
  logout,
  checkAuth,
} = require("../controllers/user");

router.post("/login", login);
router.get("/logout", logout);
router.get("/checkAuth", checkAuth);
// router.post("/register", register);

module.exports = router;

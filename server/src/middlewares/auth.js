const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.user = verified;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = auth;

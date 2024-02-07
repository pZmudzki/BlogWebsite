const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

function createServer() {
  const app = express();

  //middleware
  app.use(cookieParser());
  app.use(express.json());
  app.use(cors());

  app.use("/api", require("../routes/user"));
  app.use("/api/posts", require("../routes/posts"));

  app.get("/api/test", async (req, res) => {
    res.json({ message: "pass!" });
  });

  return app;
}

module.exports = createServer;

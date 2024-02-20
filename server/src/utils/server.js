const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

function createServer() {
  const app = express();

  //middleware
  app.use(cookieParser());
  app.use(express.json({ limit: "100mb" }));
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

  app.use("/api", require("../routes/user"));
  app.use("/api/posts", require("../routes/posts"));
  app.use("/api/comments", require("../routes/comments"));

  return app;
}

module.exports = createServer;

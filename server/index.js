const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/", require("./src/routes/user"));
app.use("/api/posts", require("./src/routes/posts"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error.message));

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const createServer = require("./src/utils/server");
dotenv.config();

const app = createServer();
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error.message));

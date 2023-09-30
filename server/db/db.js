const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();



function connection() {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
    .then(() => console.log("Connected"))
    .catch((error) => console.log("connection error", error));
}

module.exports = connection;

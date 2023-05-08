const mongoose = require("mongoose");
const URI = process.env.MONGO_DB;

mongoose
  .connect(URI)
  .then((res) => {
    console.log("Connection established with Database");
  })
  .catch((error) => {
    console.log("Connnection not established");
  });

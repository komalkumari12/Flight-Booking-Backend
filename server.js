const express = require("express");
const app = express();
require("dotenv").config();
require("./database/connection");
app.use(express.json());

const flightRouter = require("./router/flight");
const port = process.env.PORT;

app.use("/api", flightRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

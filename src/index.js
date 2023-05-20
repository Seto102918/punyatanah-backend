require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");

const router = require("./routes/router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use("/", router);

connection.connect.sync();
console.log("a");

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server Running " + process.env.SERVER_PORT);
});

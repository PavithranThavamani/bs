const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book_routes");
require("dotenv").config();
const cors = require("cors");

const app = express();

//middlewares

// app.use("/", (req, res, next) => [res.send("Hello!, connected")]);
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:UyS9FC11MOWNdLxV@cluster0.jcu1d.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => console.log(err));
//UyS9FC11MOWNdLxV

const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

// Enviroment value
const user = process.env.DATABASE_USER_ID;
const password = process.env.DATABASE_USER_PSD;
const dbname = process.env.DATABASE_NAME;

//importing routes
const movieRouter = require("./routes/movie.route");
const errorHandler = require("./routes/error.route");

app.use("/movies", movieRouter);
app.use(errorHandler);

// Database connection
mongoose
  .connect(
    `mongodb+srv://${user}:${password}@ankur.r5e0l3y.mongodb.net/${dbname}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`connected to ${user} db!`);
    app
      .listen(4000, (err) => {
        if (err) console.log(err);
        else console.log(`Movie service is running on port 4000!`);
      })
      .on("error", (err) => {
        console.error(`${err}`);
        process.exit();
      });
  })
  .catch((err) => {
    console.error(`${err}`);
  });

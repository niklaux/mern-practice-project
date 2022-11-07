const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// imports router constant from prlaces-routes.js
const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
  next();
});

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "mongodb+srv://******************@cluster0.bnwewwx.mongodb.net/mern?retryWrites=true&w=majority"
  )
  .then(() => {
    // SERVER PORT
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

// database << collections << documents
// a schema is a blueprint of a document
// based on the schema, we can create an instance model, will result on a new document

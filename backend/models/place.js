// Schema and Model
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// blueprint for document, ids are created automatically by mongodb
const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

// mongoose.model('NameOfDocument', Schema)
module.exports = mongoose.model("Place", placeSchema);

const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, require: true },
  // userId: { type: String, required: true },
  imageUrl: { type: String, required: true },
  realseDate: { type: Number, required: true },
});

module.exports = mongoose.model("Movie", moviesSchema);

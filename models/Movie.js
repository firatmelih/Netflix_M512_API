const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSmall: { type: String },
    trailer: { type: String },
    year: { type: String },
    limit: { type: Number },
    seasons: { type: Number },
    genre: { type: String },
    genreMulti: { type: Array },
    score: { type: Number },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);

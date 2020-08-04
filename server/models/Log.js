const mongoose = require("./../db");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
  },
  protein: {
    type: Number,
  },
  fiber: {
    type: Number,
  },
  fat: {
    type: Number,
  },
});

const LogSchema = mongoose.Schema({
  products: {
    type: [ProductSchema],
    required: true,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Log", LogSchema);

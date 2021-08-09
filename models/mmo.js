const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mmoSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for mmo"
  },
  description: {
    type: String,
    required: "Enter a description for mmo"
  },
  genre: {
    type: String,
    required: "Enter what genre of mmo"
  },
  release_date: {
    type: Date,
    required: "Enter release date"
  },
  pay_model: {
    type: String,
    required: "Enter a pay model for mmo"
  },
  platforms: {
    type: [String],
    required: "Enter platforms for mmo"
  },
  pve: {
    type: Boolean,
    required: "PvE combat? true/false"
  },
  pvp: {
    type: Boolean,
    required: "PvP combat? true/false"
  },
  developers: {
    type: [String]
  },
  publishers: {
    type: [String]
  },
  engine: {
    type: String,
  },
  price: {
    type: [{
      marketplace: String,
      price: Number
    }],
  },
  system_requirements: {
    type: [{
      requirement_name: String,
      requirement_value: String
    }],
  },
  tags: {
    type: [String],
  },
});

const Mmo = mongoose.model("Mmo", mmoSchema);

module.exports = Mmo;

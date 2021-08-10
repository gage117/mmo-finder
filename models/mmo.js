const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mmoSchema = new Schema({
  // Required
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
    required: "Enter a pay model for mmo",
    validate: [(value) => ["Subscription", "Buy to Play", "Free to Play"].includes(value), "Value must be Subscription, Buy to Play, or Free to Play"]
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
  //Not required
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
  ratings: {
    type: [{
      reviewer: String,
      rating: Number
    }],
  },
  average_rating: {
    type: Number,
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
  // TODO: DLCs?
});


// mmoSchema.methods.calculateAverageRating = function() {
//   this.average_rating = this.ratings.reduce((a, b) => a.score + b.score) / this.ratings.length;
//   return this.average_rating;
// };

const Mmo = mongoose.model("Mmo", mmoSchema);

module.exports = Mmo;

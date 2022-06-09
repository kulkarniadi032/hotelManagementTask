const mongoose = require("mongoose");
const hotelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    review: {
      type: [String],
      default: "Good Hotel",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("hotel", hotelSchema);

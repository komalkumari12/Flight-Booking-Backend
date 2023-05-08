const mongoose = require("mongoose");

const flightSchema = mongoose.Schema(
  {
    cityA: {
      type: String,
      required: true,
    },
    cityB: {
      type: String,
      required: true,
    },
    flightDetails: [
      {
        flightName: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        date: {
          type: String,
          required: true,
        },
        timing: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;

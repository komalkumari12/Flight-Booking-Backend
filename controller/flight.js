const Flight = require("../model/flight");

exports.addFlight = async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);

    return res.status(200).json({
      message: "New flight added",
      data: newFlight,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

exports.getAllFlights = async (req, res) => {
  try {
    const allFlights = await Flight.find({});

    return res.status(200).json({
      message: "Fetched All flights",
      data: allFlights,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.updateFlight = async (req, res) => {
  try {
    const { id } = req.params;

    const flightUpd = await Flight.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!flightUpd) {
      return res.status(404).json({
        message: "Could not find Flight",
      });
    }

    return res.status(200).json({
      message: "FlightUpdated",
      data: flightUpd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.deleteFlight = async (req, res) => {
  try {
    const { id } = req.params;

    const FlightDel = await Flight.findByIdAndDelete(id);

    if (!FlightDel) {
      return res.status(404).json({
        message: "Could not find Flight to delete",
      });
    }

    return res.status(200).json({
      message: "Successfully deleted Flight",
      data: FlightDel,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

exports.searchFlight = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

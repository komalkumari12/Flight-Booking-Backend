const express = require("express");
const router = express.Router();
const flightController = require("../controller/flight");

router.post("/addFlight", flightController.addFlight);

router.get("/getAllFlights", flightController.getAllFlights);

router.put("/updateFlight/:id", flightController.updateFlight);

router.delete("/deleteFlight/:id", flightController.deleteFlight);

router.put("/searchFlight", flightController.searchFlight);

module.exports = router;

const express = require("express");

const router = express.Router();

const {
  getAllHotels,
  getSingleHotelData,
  updateSingleDataReview,
} = require("../controller/hotel-controller");

router.route("/hotel").get(getAllHotels);

router.route("/hotel/:id").get(getSingleHotelData).put(updateSingleDataReview);

module.exports = router;

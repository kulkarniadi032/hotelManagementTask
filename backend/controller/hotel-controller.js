const Hotel = require("../model/Hotel");
exports.getAllHotels = async (req, res) => {
  try {
    const data = await Hotel.find();
    res.status(200).json({
      success: true,
      message: "Hotel data get successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to get hotel data",
      error,
    });
  }
};

exports.getSingleHotelData = async (req, res) => {
  try {
    const data = await Hotel.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Get Single Hotel Data Successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to get single hotel data",
      error,
    });
  }
};

exports.updateSingleDataReview = async (req, res) => {
  try {
    const result = await Hotel.findById(req.params.id);
    const data = await Hotel.findByIdAndUpdate(
      req.params.id,
      { review: [...result.review, req.body.review] },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      success: true,
      message: "Update Review Data Successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to Update data" + error,
      data: null,
    });
  }
};

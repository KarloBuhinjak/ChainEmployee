const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  vin: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  brand: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  motor: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  mileage: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  owner: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  yop: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  reviewedBy: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model("post", PostSchema);

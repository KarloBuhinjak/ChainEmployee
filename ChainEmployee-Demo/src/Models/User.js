const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  lastName: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  isAdmin: {
    type: mongoose.SchemaTypes.Boolean,
    required: false,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model("users", UserSchema);

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  isDeployed: {
    type: Boolean,
    default: false,
  },
  deployedAt: {
    type: Date,
    default: null,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

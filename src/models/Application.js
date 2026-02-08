const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job"
    },
    developer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    coverLetter: String,
    status: {
      type: String,
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Application",
  applicationSchema
);

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    title: String,
    description: String,
    salary: Number,
    status: {
      type: String,
      default: "open"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);

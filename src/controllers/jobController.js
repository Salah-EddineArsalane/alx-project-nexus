const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      company: req.user.id
    });

    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find().populate(
    "company",
    "name email"
  );

  res.json(jobs);
};

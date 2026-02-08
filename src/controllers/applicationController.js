const Application = require("../models/Application");

exports.applyJob = async (req, res) => {
  try {
    const app = await Application.create({
      job: req.params.jobId,
      developer: req.user.id,
      coverLetter: req.body.coverLetter
    });

    res.json(app);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

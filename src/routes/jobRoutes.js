const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  createJob,
  getJobs
} = require("../controllers/jobController");

router.get("/", getJobs);
router.post(
  "/",
  auth,
  role("company"),
  createJob
);

module.exports = router;

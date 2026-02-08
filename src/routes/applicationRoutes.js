const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  applyJob
} = require("../controllers/applicationController");

router.post(
  "/:jobId",
  auth,
  applyJob
);

module.exports = router;

const express = require('express');
const router = express.Router();

// Placeholder routes
router.get('/', (req, res) => {
  res.json({ message: 'Jobs list endpoint placeholder' });
});

router.post('/create', (req, res) => {
  res.json({ message: 'Create job endpoint placeholder' });
});

module.exports = router;

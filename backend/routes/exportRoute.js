const express = require('express');
const router = express.Router();
const { exportAsPdf, exportAsDocument } = require('../controller/exportController');
const { protect } = require('../middlewares/authMiddleware')

router.get("/:id/pdf", protect, exportAsPdf);
router.get("/:id/doc", protect, exportAsDocument);

module.exports = router;
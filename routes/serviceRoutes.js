const express = require('express');
const { electricalServices, plumbingServices, technicalServices, cleaningServices } = require('../controllers/serviceController');
const router = express.Router();

// GET /api/services - Get all services
router.get('/electrical', electricalServices);

router.get('/plumbing', plumbingServices);

router.get('/technical', technicalServices);

router.get('/cleaning', cleaningServices);

module.exports = router;



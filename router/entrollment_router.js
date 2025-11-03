const entrollmentController = require('../controller/entrollment_controller');
const express = require('express');
const router = express.Router();

router.post('/create', entrollmentController.createEntrollment);
router.get('/all',entrollmentController.getAllEntrollments);

module.exports = router;

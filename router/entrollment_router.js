const entrollmentController = require('../controller/entrollment_controller');
const express = require('express');
const router = express.Router();

router.post('/create', entrollmentController.createEntrollment);
router.get('/all',entrollmentController.getAllEntrollments);
router.put('/update/:id',entrollmentController.updateEntrollment);
router.delete('/delete/:id',entrollmentController.deleteEntrollment);

module.exports = router;

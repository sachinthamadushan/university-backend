const courseController = require('../controller/course_controller');
const express = require('express');
const router = express.Router();


router.post('/create', courseController.createCourse);
router.get('/all',courseController.getAllCourses);
router.get('/find/:code',courseController.getCourseByCode);
router.put('/update/:id',courseController.updateCourse);
router.delete('/delete/:id',courseController.deleteCourse)

module.exports = router;

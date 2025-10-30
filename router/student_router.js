const express = require('express');
const stundents = require('../controller/student_controller');
const router = express.Router();

router.post('/create', stundents.createStudent);
router.get('/all',stundents.getAllStudents);
router.get('/find/:id',stundents.getStudentById);
router.put('/update/:id',stundents.udateStudent);
router.delete('/delete/:id', stundents.deleteStudent);


module.exports = router;


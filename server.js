const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

const studentRouter = require('./router/student_router');
const courseRouter = require('./router/course_router');
const entrollmentRouter = require('./router/entrollment_router');

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}));

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/courses',courseRouter);
app.use('/api/v1/entrollments',entrollmentRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server stared on port ${process.env.PORT}`);
});
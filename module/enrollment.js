const db = require('../db');

const entrollments = {
    create: (entrollment) => {
        const { student_id, course_id, enrollment_date } = entrollment;
        const sql = "INSERT INTO enrollments(enrollments.student_id, enrollments.course_id, enrollments.enrollment_date) VALUES(?,?,?)"
        return db.execute(sql, [parseInt(student_id), parseInt(course_id), enrollment_date]);
    },
    findAll: () => {
        const sql = `SELECT enrollment_id, enrollments.enrollment_date , CONCAT(student.first_name," ",
                student.last_name) AS full_name , courses.course_code, courses.course_name,
                courses.course_fee  FROM enrollments INNER JOIN student ON 
                enrollments.student_id = student.student_id INNER JOIN courses ON 
                enrollments.course_id = courses.course_id ORDER BY enrollments.enrollment_date
                DESC`;
        return db.execute(sql);
    },
    update: (entrollment) => {
        const {id,student_id, course_id, enrollment_date} = entrollment;
        const sql = `UPDATE enrollments SET enrollments.student_id=? , 
        enrollments.course_id=?, enrollments.enrollment_date=? WHERE
        enrollment_id=?`;
        return db.execute(sql,[student_id,course_id,enrollment_date,id]);
    },
    delete:(id)=>{
        const sql = `DELETE FROM enrollments WHERE enrollment_id=?`;
        return db.execute(sql,[id]);
    }
}

module.exports = entrollments;
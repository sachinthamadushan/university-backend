const db = require("../db");

const course = {
    create:(course)=>{
        const {course_name,course_code,description,course_fee} = course;
        const sql = "INSERT INTO courses(course_name,course_code,`description`,course_fee) VALUES(?,?,?,?)";
        return db.execute(sql,[course_name,course_code,description,course_fee]);
    },
    findAll:() => {
        const sql = "SELECT * FROM courses ORDER BY course_id DESC";
        return db.execute(sql);
    },
    findByCourseCode:(code)=> {
        const sql = "SELECT * FROM courses WHERE course_code = ?";
        return db.execute(sql,[code]);
    }
}

module.exports = course;
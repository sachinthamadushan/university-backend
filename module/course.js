const db = require("../db");

const course = {
    create:(course)=>{
        const {course_name,course_code,description,course_fee,status} = course;
        const sql = `INSERT INTO courses(course_name,course_code,description,course_fee,status) 
        VALUES(?,?,?,?,?)`;
        return db.execute(sql,[course_name,course_code,description,course_fee,status]);
    },
    findAll:() => {
        const sql = "SELECT * FROM courses WHERE `status`=1 ORDER BY course_id DESC";
        return db.execute(sql);
    },
    findByCourseCode:(code)=> {
        const sql = "SELECT * FROM courses WHERE course_code = ?";
        return db.execute(sql,[code]);
    },
    update:(course) => {
        const {course_name,course_code,description,course_fee,course_id} = course;
        const sql = `UPDATE courses SET course_name=?, course_code=?, description=?,
        course_fee = ? WHERE course_id=?`;
        return db.execute(sql,[course_name,course_code,description,course_fee,course_id])
    },
    delete:(id) => {
        const sql = `UPDATE courses SET status=0 WHERE course_id=?`;
        return db.execute(sql,[id]); 
    }
}

module.exports = course;
const db = require('../db');

const student = {
    save: (student) => {
        const { first_name, last_name, email, dob } = student;
        const sql = "INSERT INTO student(first_name, last_name, email, dob) VALUES(?,?,?,?)";
        return db.execute(sql, [first_name, last_name, email, dob]);
    },
    findAll:() =>{
        const sql = "SELECT * FROM student ORDER BY first_name";
        return db.execute(sql);
    },
    findById:(id) => {
        const sql = "SELECT * FROM student WHERE student_id = ?";
        return db.execute(sql,[id]);
    },
    update:(student) => {
        const {id,first_name,last_name,email,dob} = student;
        const sql = "UPDATE student SET first_name=?,last_name=?,email=?,dob=? WHERE student_id = ?";
        return db.execute(sql,[first_name,last_name,email,dob,id]);
    },
    delete:(id) => {
        const sql = "DELETE FROM student WHERE student_id=?";
        return db.execute(sql,[id]);
    }
};

module.exports = student;
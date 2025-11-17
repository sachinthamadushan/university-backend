const db = require('../db');

const student = {
    save: (student) => {
        const { first_name, last_name, email, dob,status } = student;
        const sql = `INSERT INTO student(first_name, last_name, email, dob,status) 
        VALUES(?,?,?,?,?)`;
        return db.execute(sql, [first_name, last_name, email, dob,status]);
    },
    findAll:() =>{
        const sql = `SELECT * FROM student WHERE student.status=1 
        ORDER BY first_name`;
        return db.execute(sql);
    },
    findById:(id) => {
        const sql = `SELECT * FROM student WHERE student_id = ?
        AND student.status=1 `;
        return db.execute(sql,[id]);
    },
    findByText:(input) => {
        const searchText = `%${input}%`
        const sql = `SELECT * FROM student WHERE email LIKE ? OR
        first_name LIKE ? OR last_name LIKE ? OR dob LIKE ?  
        AND student.status=1`;
        return db.execute(sql,[searchText,searchText,searchText,searchText]);
    },
    update:(student) => {
        const {id,first_name,last_name,email,dob} = student;
        const sql = "UPDATE student SET first_name=?,last_name=?,email=?,dob=? WHERE student_id = ?";
        return db.execute(sql,[first_name,last_name,email,dob,id]);
    },
    delete:(id) => {
        console.log(id);
        
        const sql = "UPDATE student SET student.status=0 WHERE student_id=?";
        return db.execute(sql,[id]);
    }
};

module.exports = student;
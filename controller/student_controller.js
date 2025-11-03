const student = require('../module/student');

const students = {
    createStudent: async (req, res) => {
        try {
            const { first_name, last_name, email, dob } = req.body;
            const result = await student.save({ first_name, last_name, email, dob,
                status:1
             });
            res.status(201).json({ msg: 'Student saved successful', data: result })
        } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    },
    getAllStudents: async (req, res) => {
        try {
            const [result] = await student.findAll();
            if (result.length === 0) {
                return res.status(200).json({ msg: "No data found" });
            }
            res.status(200).json({ data: result });
        } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    },
    getStudentById: async (req, res) => {
        try {
            const [result] = await student.findById(req.params.id);
            if (result.length === 0) {
                return res.status(200).json({ msg: "Student not found" });
            }
            res.status(200).json({ data: result });
        } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    },
    getStudentByText: async(req,res) => {
        try {
            const [result] = await student.findByText(req.params.text);
            if(result.length === 0){
                return res.status(200).json({ msg: "Student not found" });
            }
            res.status(200).json({data:result});
        } catch (error) {
           res.status(500).json({ message: 'Server Error', error: error.message }); 
        }
    },
    udateStudent: async (req, res) => {
        try {
            const {first_name, last_name, email, dob } = req.body;
            const id = req.params.id;
            const [result] = await student.update({ first_name, last_name, email, dob, id });
            if (result.affectedRows === 0) {
                return res.status(404).json({ msg: "Student not found" });
            }
            res.status(200).json({msg:"Student Update Successful"});
        } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    },
    deleteStudent: async(req,res) => {
        try {
           const [result] = await student.delete(req.params.id);
           if(result.affectedRows===0){
            return res.status(404).json({msg:"Student Not Fond"});
           }
           res.status(200).json({msg:"Student delete successful"}); 
        } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    }
}

module.exports = students;

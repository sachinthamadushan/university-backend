const entrollments = require('../module/enrollment')

const entrollmentController = {
    createEntrollment: async(req,res) => {
        try {
            const {student_id,course_id} =  req.body;
            const enrollment_date = new Date();
            const [result] = await entrollments.create({student_id,course_id,enrollment_date});
            if(result.affectedRows == 1){
                res.status(201).json({msg:"Entrollment successfull"});
            }else{
                res.status(400).json({msg:"Entrollment faild"});
            }
        } catch (error) {
            res.status(500).json({msg:`Internal server error : ${error.message}`});
        }
    },
    getAllEntrollments: async(req,res) => {
        try {
            const [result] = await entrollments.findAll();
            if(result.length === 0){
                res.status(404).json({msg:'Enrollments not found'});
                return;
            }
            res.status(200).json({data:result});
        } catch (error) {
            res.status(500).json({msg:`Internal server error : ${error.message}`});
        }
    }
}

module.exports = entrollmentController;
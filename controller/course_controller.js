const course = require('../module/course');

const courseController = {
    createCourse:async(req, res) => {
        try {
            const {course_name,course_code,description,course_fee} = req.body;
            const [result] = await course.create({course_name,course_code,description,
                course_fee});
            if(result.affectedRows === 1){
                res.status(201).json({msg:"Course created successfully"});
            }else{
                res.status(400).json({msg:"Course not created"});
            }    
        } catch (error) {
            res.status(500).json({msg:`Internal server error : ${error.message}`});
        }
    },
    getAllCourses: async(req,res) => {
        try {
            const [result] = await course.findAll();
            if(result.length === 0){
                res.status(404).json({msg:"Courses not found"});
                return;
            }
            res.status(200).json({data:result});
        } catch (error) {
            res.status(500).json({msg:`Internal server error : ${error.message}`});
        }
    },
    getCourseByCode: async (req,res) => {
        try {
            const code = req.params.code;
            const [result] = await course.findByCourseCode(code);
            if(result.length === 0){
                res.status(404).json({msg:"Courses not found"});
                return;
            }
            res.status(200).json({data:result});
        } catch (error) {
            res.status(500).json({msg:`Internal server error : ${error.message}`});
        }
    }

}

module.exports = courseController;
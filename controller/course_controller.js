const course = require('../module/course');

const courseController = {
    createCourse: async (req, res) => {
        try {
            const { course_name, course_code, description, course_fee } = req.body;
            const [result] = await course.create({
                course_name, course_code, description,course_fee,status:1
            });
            if (result.affectedRows === 1) {
                res.status(201).json({ msg: "Course created successfully" });
            } else {
                res.status(400).json({ msg: "Course not created" });
            }
        } catch (error) {
            res.status(500).json({ msg: `Internal server error : ${error.message}` });
        }
    },
    getAllCourses: async (req, res) => {
        try {
            const [result] = await course.findAll();
            if (result.length === 0) {
                res.status(404).json({ msg: "Courses not found" });
                return;
            }
            res.status(200).json({ data: result });
        } catch (error) {
            res.status(500).json({ msg: `Internal server error : ${error.message}` });
        }
    },
    getCourseByCode: async (req, res) => {
        try {
            const code = req.params.code;
            const [result] = await course.findByCourseCode(code);
            if (result.length === 0) {
                res.status(404).json({ msg: "Courses not found" });
                return;
            }
            res.status(200).json({ data: result });
        } catch (error) {
            res.status(500).json({ msg: `Internal server error : ${error.message}` });
        }
    },
    updateCourse: async (req,res) => {
        try {
            const { course_name, course_code, description, course_fee } = req.body;
            const id = req.params.id;
            await course.update(
                {
                    course_name: course_name,
                    course_code: course_code,
                    description: description,
                    course_fee: course_fee,
                    course_id: id
                }
            );
            res.status(200).json({msg:'Course updated !'})
        } catch (error) {
            res.status(500).json({ msg: `Internal server error : ${error.message}` });
        }
    },
    deleteCourse:async(req,res)=>{
        try {
           await course.delete(req.params.id);
           res.status(200).json({msg:'Delete successful'}) 
        } catch (error) {
            res.status(500).json({ msg: `Internal server error : ${error.message}` });
        }
    }

}

module.exports = courseController;
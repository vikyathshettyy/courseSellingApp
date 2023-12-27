
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");


const express = require('express')
const router = express.Router()


// Admin Routes
router.post('/signup', async function (req, res) {
    // Implement admin signup logic
    const username1 = req.headers.username;
    const password1 = req.headers.password;

    const admin = await Admin.create({username: username1, password: password1});
    res.status(200).send('Admin created successfully');




});

router.post('/courses', adminMiddleware, async function(req, res) {
    // Implement course creation logic
    const username1 = req.headers.username;
    const password1 = req.headers.password;
    const admin = await Admin.find({ username: username1 });
    try{
        const course = await Course.create({ 
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageLink: req.body.imageLink,
            adminid: admin._id,
            published: true,
         })
         res.status(200).json({
             message: 'Course created successfully', courseId: course._id
         })

    }
    catch(e)
    {
        console.log(e.message);
        res.status(500).send('error while creating course');
    }
   
});

router.get('/courses', adminMiddleware, async function (req, res) {
    // Implement fetching all courses logic
    const username1 = req.headers.username;
    const courses = await Course.find({});
    res.json(courses);
});

module.exports = router;
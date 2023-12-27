const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
app.post('/signup', async function (req, res) {
    // Implement admin signup logic
    const username1 = req.headers.username;
    const password1 = req.headers.password;

    const admin = await Admin.create({username: username1, password: password1});
    res.status(200).send('Admin created successfully');




});

app.post('/courses', adminMiddleware, async function(req, res) {
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

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;
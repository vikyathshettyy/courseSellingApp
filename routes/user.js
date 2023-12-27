const express = require('express')
const router = express.Router()
const userMiddleware = require("../middleware/user");
const { User,Course,Purchase  } = require("../db");



// User Routes
router.post('/signup',async function (req, res) {
    // Implement user signup logic
    const username1 = req.headers.username;
    const password1 = req.headers.password;

    const usernew = await User.create({username: username1, password: password1});
    res.status(200).json({message: 'User created successfully'});
});

router.get('/courses',async function (req, res) {
    // Implement listing all courses logic
    const all = await Course.find({});
    res.json(all);
});

router.post('/courses/:courseId', userMiddleware, async function(req, res) {
    // Implement course purchase logic
    const courseIdd = req.params.courseId;
    const username1 = req.headers.username;
    const user = await User.find({username: username1});

    const ans =await Purchase.create({userid: user._id, courseid: courseIdd});
    res.json({message: 'course purchased successfully'});

});

router.get('/purchasedCourses', userMiddleware, async function(req, res) {
    // Implement fetching purchased courses logic
    const user_id = (await User.find({username: req.headers.username}))._id;
    const ans = await Purchase.find({userid: user_id}).populate('courseid').select('title description price imageLink published');
    res.json(ans);
    
    
});
module.exports = router;
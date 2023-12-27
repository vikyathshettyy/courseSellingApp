const { Admin } = require("../db");


// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username1 = req.headers.username;
    const password1 = req.headers.password;
    try{
        const admin = await Admin.find({username: username1});
        console.log(admin);
        if(admin.length > 0)
        {
            if(admin[0].password === password1)
            {
                next();
            }
            else{
                res.status(403).send("wrong password");
            }
        }
        else{
            res.status(403).send("admin doesn't exist");
        }
    }

    catch(e)
    {
        res.status(500).send("an error occured at the server");
    }
}

module.exports = adminMiddleware;
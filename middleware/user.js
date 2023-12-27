function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username1 = req.headers.username;
    const password1 = req.headers.password;
    try{
        const user = User.find({username: username1});
        if(user.length > 0) {
            if(user[0].password === password1)
            {
                next();
            }
            else{
                res.status(403).send("wrong password");
            }
        }
        else{
            res.status(403).send("user doesn't exist");
        }
    }

    catch{
        res.status(500).send("an error occured at the server");
    }
}

module.exports = userMiddleware;
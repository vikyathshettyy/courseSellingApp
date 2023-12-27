const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:Vikyath%401964@cluster0.owmhwku.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,

    
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    adminid:{
        type:mongooose.SchemaTypes.ObjectId,
        ref:Admin,
    } 
    
    
});

const PurchaseSchema = new mongoose.Schema({
    userid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User,
    },
    courseid:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: Course,
    }, 
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const Purchase = mongoose.model('Purchase',PurchaseSchema);

module.exports = {
    Admin,
    User,
    Course,
    Purchase,

}
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:Vikyath%401964@cluster0.owmhwku.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,

    
});
const Admin = mongoose.model('Admin', AdminSchema);

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    

});
const User = mongoose.model('User', UserSchema);

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    adminid:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Admin',
    }, 
    published: Boolean,
    
    
});

const Course = mongoose.model('Course', CourseSchema);

const PurchaseSchema = new mongoose.Schema({
    userid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    },
    courseid:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course',
    }, 
})



const Purchase = mongoose.model('Purchase',PurchaseSchema);

module.exports = {
    Admin,
    User,
    Course,
    Purchase,

}
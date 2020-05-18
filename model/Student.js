const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isRegistered: {
        type: Boolean,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    attendance: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
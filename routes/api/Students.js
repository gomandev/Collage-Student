const express = require('express');

const router = express.Router();

const Student = require('../../model/Student');

// @route GET api/students
// @desc GET all students
// access Private

router.get('/', (req, res) => {
    Student.find()
        .sort({ date: -1 })
        .then(students => res.json(students));
})

// @route Post api/students
// @desc Add A New Students
// access Private

router.post('/', (req, res) => {
    const newStudent = new Student({
        name: req.body.name,
        attendance: req.body.attendance,
        department: req.body.department,
        isRegistered: req.body.isRegistered,

    });

    newStudent.save().then(students => res.json(students));
})

// @route Post api/students/:id
// @desc Delete Student
// access Private

router.delete('/:id', (req, res) => {
   
    Student.findById(req.params.id)
        .then(student => student.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

// @route Post api/students/:id
// @desc Update Student
// access Private

router.put('/:id', (req, res) => {
   
    Student.findById(req.params.id)
        .then(student => student.update({}, {
            $set: {
                name: req.body.name,
                attendance: req.body.attendance,
                department: req.body.department,
                isRegistered: req.body.isRegistered,
            }
        }).then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;
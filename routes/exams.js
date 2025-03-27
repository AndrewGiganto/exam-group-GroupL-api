const express = require('express');
const router = express.Router();

let exams = [
    { id: 1, name: "Midterm Exam" },
    { id: 2, name: "Final Exam" }
];

// GET /exams - Returns all exams
router.get('/', (req, res) => {
    res.json(exams);
    });
    
    // POST /exams - Adds a new exam
    router.post('/', (req, res) => {
    const newExam = {
    id: exams.length + 1,
    name: req.body.name
    };
    exams.push(newExam);
    res.status(201).json(newExam);
    });

module.exports = router;
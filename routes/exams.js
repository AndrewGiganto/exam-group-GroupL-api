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
    // PUT /exams/:id - Updates an exam
router.put('/:id', (req, res) => {
    const examId = parseInt(req.params.id);
    const exam = exams.find(ex => ex.id === examId);
    
    if (!exam) {
    return res.status(404).json({ message: "Exam not found" });
    }
    
    exam.name = req.body.name || exam.name;
    res.json({ message: "Exam updated", exam });
    });

module.exports = router;
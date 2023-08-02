const router = require('express').Router()
const studentsController = require('../controllers/students')

// find all student 
router.get('/', studentsController.index)

// create new student.
router.get('/create', studentsController.create)

// save student info
router.post('/create', studentsController.save)

// edit student info
router.get('/edit/:id', studentsController.edit)

// update student info
router.put('/edit/:id', studentsController.update)

// delete student
router.delete('/delete/:id', studentsController.delete)

module.exports = router
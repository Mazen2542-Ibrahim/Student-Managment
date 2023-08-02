const Student = require('../models/students')



module.exports = {
    index: async (req, res)=>{
        const students = await Student.find({})
        res.render('index', {students: students})
    },
    create: (req, res)=>{
        res.render('create', {student: Student()})
    },
    save: async (req, res)=>{
        const student = new Student({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age
        })
        try{
            await student.save().then(()=> {
                res.redirect('/')
            })
        }catch(e){
            res.render('create', {student: student})
        }
    },
    edit: async (req, res)=>{
        try{
            const student = await Student.findById({_id: req.params.id})
            res.render('edit', {student: student})
        }catch(e){
            res.redirect('/')
        }
    },
    update: async (req,res)=>{
        const id = req.params.id
        try{
            await Student.findByIdAndUpdate(id, {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    age: req.body.age,
                })
        }catch(e){
            console.log(`there was an error: ${e}`)
        }
        res.redirect('/')
    },
    delete: async (req, res)=>{
        try{
            await Student.deleteOne({_id: req.params.id})
        }catch(e){
            console.log(`there was an error: ${e}`)
        }
        res.redirect('/')
    }
}
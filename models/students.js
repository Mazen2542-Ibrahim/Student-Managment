const mongoose = require('mongoose')

const studentScema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true, "Please add the frist name"]
    },
    lastname:{
        type: String,
        required: [true, "Please add the last name"]
    },
    age:{
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Student', studentScema)
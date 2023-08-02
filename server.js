const express = require('express')
const ejs = require('ejs')
require('dotenv').config()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const router = require('./routes/students')
const app = express()

app.set('view engine', 'ejs')

app.use(methodOverride('_method', {methods: ['POST', 'GET']}))
app.use(express.urlencoded({extended: true}))
app.use('/', router)

mongoose.connect(process.env.MONGODB_STRING)

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`server is listening on port:${process.env.PORT || 5000}`)
})
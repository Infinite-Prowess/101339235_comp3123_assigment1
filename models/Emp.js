const mongoose = require("mongoose")

//Define Schema
const empSchema = new mongoose.Schema({
    first_name: {
        type: String,
        maxLength: 100,
        require: true
    },
    last_name: {
        type: String,
        maxLength: 50,
        require: true
    },
    email: {
        type: String,
        maxLength: 50,
        require: true,
        unique: true
    },
    gender: {
        type: String,
        maxLength: 25
    },
    salary: {
        type: Number,
        require: true
    }
})

//Creating Model from Schema
module.exports = mongoose.model("emp", empSchema)
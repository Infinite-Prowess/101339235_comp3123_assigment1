const mongoose = require("mongoose")

//Define Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        maxLength: 100,
        require: true,
        index: { unique: true }
    },
    email: {
        type: String,
        maxLength: 50,
        require: true,
        unique: true
    },
    password: {
        type: String,
        maxLength: 50,
        require: true
    }
})

//Creating Model from Schema
module.exports = mongoose.model("user", userSchema)
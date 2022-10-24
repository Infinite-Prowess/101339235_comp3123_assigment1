const express = require("express")
const mongoose = require("mongoose")

const UserModel = require("../models/User")

const routes = express.Router()

/* Create New User */
routes.post("/user/signup", async (req, res) => {
    try {
        const newUser = new UserModel(req.body)
        const user = await newUser.save()
        res.status(201).send({
            registration_status: "Account created successfully",
            user_account_details: user            
        })
    } catch {
        res.status(400).send({
            registration_status: "Account could not be created"
        })
    }
})

/* User Login */
routes.post("/user/login", async (req, res) => {
    try {
        const checkUser = await UserModel.findOne(req.body)
        UserModel.findOne(checkUser.username) || UserModel.findOne(checkUser.email) && UserModel.findOne(checkUser.password)
        res.status(200).send({
            status: true,
            authentication_message: "Account logged in successfully",
            welcome: checkUser.username           
        })
    } catch {
        res.status(400).send({
            status: false,
            authentication_message: "Account credentials invalid"
        })
    }
})

module.exports = routes
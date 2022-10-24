const express = require("express")
const mongoose = require("mongoose")

const EmpModel = require("../models/Emp")

const routes = express.Router()

/* Retrieve All Employees */
routes.get("/emp/employees", async (req, res) => {
    try {
        const employees = await EmpModel.find()
        res.status(200).send({
            results: employees
        })
    } catch {
        res.status(400).send({
            results: "No empolyee(s) exists"
        })
    }
    
})

/* Create New Employee */
routes.post("/emp/employees", async (req, res) => {
    try {
        const newEmp = new EmpModel(req.body)
        const emp = await newEmp.save()
        res.status(201).send({
            authentication_message: "Employee created successfully",
            employee_details: emp            
        })
    } catch {
        res.status(400).send({
            authentication_message: "Employee cannot be created"
        })
    }
})

/* Retrieve Employee By ID */
routes.get("/emp/employees/:eid", async (req, res) => {
    try {
        const empCheck = await EmpModel.findById(req.params.eid)
        const empInfo = await EmpModel.findOne(empCheck)
        res.status(200).send({
            result_message: "Employee was found",
            employee_details: empInfo
        })
    } catch {
        res.status(400).send({
            result_message: "Employee cannot be found"
        })
    }
})

/* Update Employee By ID */
routes.put("/emp/employees/:eid", async (req, res) => {
    try {
        const existEmp = await EmpModel.findByIdAndUpdate(req.params.eid, req.body)
        res.status(200).send({
            update_employee: "success",
            employee_details: existEmp
        })
    } catch {
        res.status(400).send({
            update_employee: "failed"
        })
    }
})

/* Delete Employee By ID */
routes.delete("/emp/employees", async (req, res) => {
    try {
        const query = req.query.eid
        const deletedEmp = await EmpModel.findByIdAndDelete(query)
        res.status(201).send({
            employee_status: "Employee deleted successfully",
            employee_details: deletedEmp
        })
    } catch {
        res.status(400).send({
            employee_status: "Employee failed to delete"
        })
    }
})

module.exports = routes
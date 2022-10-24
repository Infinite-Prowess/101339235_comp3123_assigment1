const express = require("express")
const userRoutes = require("./routes/user")
const empRoutes = require("./routes/emp")
const mongoose = require("mongoose")

const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded())

const DB_CONNECTION_STRING = "mongodb+srv://Omar:NewPasscode1@assignment1.belg1b3.mongodb.net/assignment1?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/api/", userRoutes)
app.use("/api/", empRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>User & Employee Application</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
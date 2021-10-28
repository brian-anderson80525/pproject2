require("dotenv").config() // Loading .env variables
const mongoose = require("mongoose")

// Connect to Mongo
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
/////////////////////////////////////
// Establish Database Connection
/////////////////////////////////////
const db = mongoose.connection

//our connection messages
// mongoose.connection
db.on("open", () => console.log("Connected to Mongo"))
db.on("close", () => console.log("disconnected from mongo"))
db.on("error", (error) => console.log(error))

module.exports = mongoose
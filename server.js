///////////////////////////////////
// Import our Dependencies
///////////////////////////////////

require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const path = require("path")
const liquid = require("liquid-express-views")
const ListRouter = require("./controllers/list")





/////////////////////////////////
// Create our app with object, configure liquid
/////////////////////////////////
const viewsFolder = path.resolve(__dirname, "views/")
const app = liquid(express(), {root: viewsFolder})



/////////////////////////////////////////////
// Register Our Middleware
/////////////////////////////////////////////
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


////////////////////////////////////////
// Routes
/////////////////////////////////////////
// app.get("/", (req, res) => {
//     res.send("This App is working")
// })

// Register Router
app.get("/list", ListRouter)



/////////////////////////////////////////////
// Setup Server Listener
/////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, console.log(`listening on port ${PORT}`))
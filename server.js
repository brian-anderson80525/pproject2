// import deps
require("dotenv").config() // brings in .env vars
const express = require("express") // web framework
// const morgan = require("morgan") // logger
// const methodOverride = require("method-override") // to swap request methods
// const path = require("path") // helper functions for file paths
// const FruitsRouter = require("./controllers/fruit")
// const UserRouter = require("./controllers/user")
// const session = require("express-session") // session middleware
// const MongoStore = require("connect-mongo") // save sessions in mongo


// app object
const app = express()


// route
app.get("/", (req, res) => {
    res.send("This App is working")
})

// listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))
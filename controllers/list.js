///////////////////////
// Import Dependencies
/////////////////////////
const express = require("express") // express for Router function
const List = require("../models/list.js")

//////////////////
// create router
//////////////////
const router = express.Router()

/////////////////
// create the 7 routes
/////////////////

// 1 index route - get the list of items - /list
router.get("/", (req, res) => {
    List.find({})
    .then((list) => {
        res.json(list)
    })
} )



    

    


// export my model
module.exports = router
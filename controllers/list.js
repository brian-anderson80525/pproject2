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

// 1 index route - get - /fruits
router.get("/", (req, res) => {
    //find all the fruits
    Fruit.find({username: req.session.username})
    .then((fruits) => {
        // render the index template with the fruits
        res.render("fruits/index.liquid", {fruits})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// export my model
module.exports = router
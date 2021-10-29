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
        res.render("index.liquid", {list})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// 3 new route - get request - create part1
router.get("/new", (req, res) => {
    res.render("new.liquid")
})




    

   // 2 show route - get - /fruits/:id
router.get("/:id", (req, res) => {
   
    const id = req.params.id
    // get that particular fruit from the database
    List.findById(id)
    .then((list) => {
        // render the show template with the fruit
        res.render("show.liquid", {list})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
}) 


// export my model
module.exports = router

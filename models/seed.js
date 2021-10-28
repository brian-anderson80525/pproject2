const mongoose = require("./connection")
const List = require("./list")

//saved connection as variable
const db = mongoose.connection

//run seed code when open
db.on("open", ()=> {
//delete existing list to reset
List.deleteMany({})
.then(() => {
    //seed data
    const seedList = [
        {item: "apples"},
        {item: "grapes"},
        {item: "chicken thighs"},
        {item: "creamer"},
        {item: "coffee"},
        {item: "eggs"}
    ]
    List.create(seedList).then((list) =>{
        console.log(list)
        db.close()
    })
})

})
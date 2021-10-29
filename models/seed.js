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
        {item: "grapes", qty: 1},
        {item: "apples", qty: 1},
        {item: "chicken thighs", qty: 1},
        {item: "creamer", qty: 1},
        {item: "coffee", qty: 1},
        {item: "eggs", qty: 1}
    ]
    List.create(seedList).then((list) =>{
        console.log(list)
        db.close()
    })
})

})
// imports
const {Schema, model} = require ("./connection")

const ListSchema = new Schema({
    item: String,
    qty: {type: Number, default: 1}
}, {timestamps: true})

// this is my model
const List = model("List", ListSchema)

// export my model
module.exports = List
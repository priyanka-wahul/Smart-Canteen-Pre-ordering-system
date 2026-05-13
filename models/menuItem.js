const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    // description: String,
    category: {
        type: String,
        required: true,
        enum: ['Breakfast', 'Lunch', 'Snacks', 'Beverages','desserts'],
        default: 'Snacks'
    },
    image: {
        url:String,
        filename:String,
    },
});

const menuItem = mongoose.model("menuItem",menuItemSchema);
module.exports = menuItem;
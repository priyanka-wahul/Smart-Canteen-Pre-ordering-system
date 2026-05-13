const mongoose = require("mongoose");
const { default: passportLocalMongoose } = require("passport-local-mongoose");
const Schema = mongoose.Schema;
const passpoarLocalMogoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    email:{
        type:String,
        required:true,
    }
});

userSchema.plugin(passportLocalMongoose).default;

module.exports = mongoose.model("User",userSchema);
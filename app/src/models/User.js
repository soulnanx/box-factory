const mongo = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');


const User = new mongo.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        age:{
            type: Number,
            required: false
        }
    },
    {
        timestamps: true
    }
)

User.plugin(uniqueValidator);
module.exports = mongo.model("User", User)
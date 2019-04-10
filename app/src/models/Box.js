const mongo = require('mongoose')

const Box = new mongo.Schema({
    title: {
        type: String,
        required: true
    },
    files: [ { type: mongo.Schema.Types.ObjectId, ref: "File" }],
    },
    {
      timestamps: true
    }
);

module.exports = mongo.model("Box", Box)
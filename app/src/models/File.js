const mongo = require('mongoose')

const File = new mongo.Schema(
  {
    title: {
        type: String,
        required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
    
)

module.exports = mongo.model("File", File)
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
    timestamps: true,
    toObject: {virtuals: true },
    toJSON: {virtuals: true }
  }
    
);

File.virtual('url').get(function (){
  return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongo.model("File", File)
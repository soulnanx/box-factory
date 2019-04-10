const express = require("express");
const mongo = require('mongoose');


const app = express();

var mongoaddr = 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + ':27017/api';
console.log(mongoaddr);
mongo.connect(mongoaddr);

app.use(express.json())
app.use(express.urlencoded( {extended: true }) );
app.use(require("./routes"));

app.listen(3333);
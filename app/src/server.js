const express = require("express");
const mongo = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require("http").Server(app)
const io = require("socket.io")(server)

io.on("connection", socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

var mongoaddr = 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + ':27017/api';
mongo.connect(mongoaddr);

app.use((req, res) => {
    req.io = io;

    return next();
})

app.use(cors)
app.use(express.json())
app.use(express.urlencoded( {extended: true }) );
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require("./routes"));

app.listen(3333);
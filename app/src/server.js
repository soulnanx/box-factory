const express = require("express");
const cors = require("cors");

const app = express();

const mongo = require("mongoose");
const server = require("http").Server(app);
const io = require("socket.io")(server);


var mongoaddr = 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + ':27017/api';
mongo.connect(mongoaddr);

app.use((req, res, next) => {
    req.io = io;
  
    return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes/BoxRoutes"));
app.use(require("./routes/UserRoutes"));

server.listen(3333, () => {
console.log("Server started on port 3333!");
});
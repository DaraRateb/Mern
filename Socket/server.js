// server.js
const express = require('express');
const app = express();

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);


const io = require('socket.io')(server, { cors: true });

io.on("Connection", socket => {
    console.log(socket.id);
    console.log("nice to meet you. (handshake)")
    // socket.on("event_from_client",data => {
        socket.emit("welcome_all","data");
        console.log(data);
    // });
});
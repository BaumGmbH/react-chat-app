const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3001;

const router = require('./router');
console.log(`Router: ${router}`)

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("We have a new conection")

    socket.io('disconnect', () => {
        console.log("User left")
    })
})

app.use(router)

server.listen(PORT, () => console.log(`Server has started on Port: ${PORT}`))
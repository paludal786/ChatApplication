let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function() {
    console.log('Connection Done On 3000 Port !.....');
});

io.on('connection', (socket) => {

    console.log(Object.keys(io.sockets.connected).length);

    io.emit('connections', Object.keys(io.sockets.connected).length)


    // emit events
    console.log('Socket Connected !.....');

    socket.on('disconnect', () => {
        console.log('Socket Disconnected !...');
    })

    socket.on('Created', (data) => {
        socket.broadcast.emit('Created', (data)) // to broadcast other's user data
    })

    socket.on('chat-message', (data) => {
        socket.broadcast.emit('chat-message', (data))
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', (data))
    })

    socket.on('stopTyping', (data) => {
        socket.broadcast.emit('stopTyping', (data))
    })

    socket.on('joined', (data) => {
        socket.broadcast.emit('joined', (data))
    })

    // listener
    socket.on('leaved', (data) => {
        socket.broadcast.emit('leaved', (data))
    })

});
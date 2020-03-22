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
    console.log('Socket Connected !.....');

    socket.on('disconnect', () => {
        console.log('Socket Disconnected !...');
    })

    socket.on('Created', (data) => {
        console.log('server data', data);
        socket.broadcast.emit('Created', (data)) // to broadcast other's user data
    })

});
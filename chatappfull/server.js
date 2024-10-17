const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Initialize app and server
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files
app.use(express.static(__dirname + '/public'));

// Handle connection event
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Handle incoming message from client
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Send message to all clients
    });

    // Handle disconnect event
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

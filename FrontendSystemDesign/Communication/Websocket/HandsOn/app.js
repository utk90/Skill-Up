import express from 'express';
import { createServer } from 'node:http';
import { join } from 'node:path';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const __dirname = path.resolve();
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

io.on('connection', (socket) => {
    console.log('Connection established');

    socket.on('chat message', (msg) => {
        console.log('message receieved', msg);
        io.emit('chat message', msg);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(3000, () => {
    console.log('server running at httlp://localhost:3000')
})
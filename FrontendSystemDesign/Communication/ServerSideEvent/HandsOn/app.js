import express from 'express';
import { join } from 'node:path';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.get('/sse', (req, res) => {
    // sse setup logic
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Cache-Control', 'no-cache');

    res.write('data: Welcome to Server sent events \n\n');

    const intervalId = setInterval(() => {
        res.write(`data: Server time ${new Date().toLocaleDateString()} \n\n`)
    }, 5000);

    req.on('close', () => {
        clearInterval(intervalId);
    })
})

app.get('/', (req, res) => {
    const filePath = join(__dirname, '/index.html');
    res.sendFile(filePath);
})

app.listen(3000, () => {
    console.log('server running at http://localhost:3000')
})
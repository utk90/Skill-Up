import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();
const PORT = 5111;
const obj = {
    data: 'Initial data'
}

const waitingClients = [];

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
})

app.get('/', (req, res) => {
    console.log('__dirname', __dirname)
    res.sendFile(__dirname + '/index.html');
});

app.get('/getData', (req, res) => {
    if (obj.data !== req.query.lastData) {
        res.send({
            ...obj
        })
    } else {
        waitingClients.push(res);
    }
})

app.get('/updatedData', (req, res) => {
    obj.data = req.query.data;
    if (waitingClients.length > 0) {
        const client = waitingClients.pop();
        client.send({
            ...obj
        })
    }

    res.send({ success: 'Data updated successfully' });
})
import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();
const PORT = 5111;
const obj = {
    data: 'Initial data'
}

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
})

app.get('/', (req, res) => {
    console.log('__dirname', __dirname)
    res.sendFile(__dirname + '/index.html');
});

app.get('/getData', (req, res) => {
    res.send({
        ...obj
    })
})

app.get('/updatedData', (req, res) => {
    obj.data = 'Updated Data';
    res.send({
        ...obj
    })
})
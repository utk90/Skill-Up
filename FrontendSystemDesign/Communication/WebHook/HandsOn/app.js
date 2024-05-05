import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req,res) => {
    // extract the payload from the incoming POST request
    const payload = req.body;
    // log the received payload
    console.log('received webhook payload: ', payload);

    res.status(200).send("Webhook received successfully");
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})


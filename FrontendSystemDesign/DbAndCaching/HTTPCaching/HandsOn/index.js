import express from 'express';
import path from 'node:path'

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Expires', 'Sat, 23 Dec 2024 11:20:39 GMT');
    next();
})


app.use(express.static(path.join(__dirname, 'public'),
    {
        'cacheControl': false,
        'lastModified': true,
        'etag': true
    }
));

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})


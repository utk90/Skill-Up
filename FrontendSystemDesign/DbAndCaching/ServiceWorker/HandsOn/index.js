import express from 'express'
import path from 'node:path'

const app = express();
const __dirname = path.resolve();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT:${PORT}`);
})
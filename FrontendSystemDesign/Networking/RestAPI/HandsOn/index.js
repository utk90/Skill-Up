import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5111;

app.use(bodyParser.json());

const todos = [
    {
    id: 1,
    title: "Task 1",
    complete: false
    },
    {
        id: 2,
        title: "Task 2",
        complete: true
    }
]

app.all('/', (req, res) => {
    console.log("ReQUEST", req)
    console.log("ReSPONSE", res)
    res.send("I'm up!!");
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})


// READ
app.get('/todos', (req, res) => {
    res.json(todos);
})

// CREATE
app.post('/todos', (req,res) => {
    const newTodo = req.body;
    todos.push(newTodo);

    res.status(201).json({
        "message": "New todo added successfully!!"
    })
})

// UPDATE
app.put('/todos/:id', (req,res) => {
    const updatedTD = req.body;
    const updatedTDId = Number(req.params.id);

    const staleTDIndex = todos.findIndex(td=>td.id===updatedTDId);

    if (staleTDIndex!==-1){
        todos[staleTDIndex] = {
            id: updatedTDId,
            ...updatedTD
        }
    } else{
        res.status(400).json({
            message: "Todo id not found!!"
        }) 
        return;
    }

    res.status(200).json({
        message: "Todo updated successfully!!"
    })
})

// DELETE
app.delete('/todos/:id', (req,res) => {
    const deleteTDID = Number(req.params.id);
    const deleteTDIndex = todos.findIndex(td=>td.id===deleteTDID);

    if (deleteTDIndex!==-1){
        todos.splice(deleteTDIndex, 1);
    } else{
        res.status(400).json({
            message: "Todo id not found!!"
        })
        return;
    }

    res.status(200).json({
        message: "Todo deleted successfully!!"
    })
})
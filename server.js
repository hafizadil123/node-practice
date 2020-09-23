//lets create server

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json())

const port = 5000;
const data = [
    {
        id: 1,
        name: 'adeel',
        description: 'Software Engineer'
    },
    {
        id: 2,
        name: 'Baber',
        description: 'Software Engineer'
    },
    
    {
        id: 3,
        name: 'Azam',
        description: 'Software Engineer'
    },
    
    {
        id: 4,
        name: 'waqar',
        description: 'Software Engineer'
    },
]
app.get('/get-data', (req, res) => {

    res.status(200).json({
        message: "success",
        data: data
    })
});

app.post('/post-data', (req, res) => {
    const {id, name, description } = req.body;
    let abc = name;
    if(abc){
        abc= "i have updated";
    }
    res.status(200).json({
        message: "success data has been received",
        id: id,
        name: abc,
        description: description
    })
})

app.delete('/delete-data', (req, res) => {
    //database query lgo r data delet kr do

    const query = true;
    if(query){
        res.status(200).json({
            message: "data has been deleeted",
        })

    }

})

app.put('/delete-data', (req, res) => {
    //database query lgo r data delet kr do

    const query = true;
    if(query){
        res.status(200).json({
            message: "data has been updated",
        })
        
    }

})

app.listen(port, () => {
console.log(`server is working on ${port}`);
});
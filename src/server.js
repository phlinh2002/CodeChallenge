const express = require('express');
const calculateScores = require('./calcualteScores');

const app = express()
const port = 4000;

app.get('/scores',(req,res)=>{
    const scores = calculateScores();
    res.json(scores)
})

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})
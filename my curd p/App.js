const express  = require('express');
const path = require('path');
const databaseF  = require('./DataBaseFunction');

const app = express();
app.use(express.json());


// this get API 

app.get('/',(req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'puplic', 'index.html')); 
});

// post APi

app.post('/',(req , res)=>{
    
   
})



app.listen(3000 ,()=>{
    console.log('http://localhost:3000');
})
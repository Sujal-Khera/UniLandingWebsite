const express = require('express'); //imports express.js
const app = express(); //app instance
const port = 3000;//port

app.use(express.json());//handling POST requests with JSON data

app.get('/',(req,res)=> {
    res.send('Hello from your Node.js server!');
});

app.post('/data',(req,res)=>{
    console.log("Received data:",req.body);
    res.json( {message : 'Data received successfully', receivedData : req.body });
});

app.listen(port ,()=>{
    console.log('Server listening at http://localhost;${port}');
});
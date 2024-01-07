const express = require('express');
const bodyParser = require('body-parser');


const app =express();
app.use(bodyParser.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    
})




app.listen(8080,()=>{
console.log('serever started on port 8080');
})
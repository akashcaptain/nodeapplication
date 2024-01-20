require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

const products = require('./router/product')

app.use(express.json())
app.use(express.urlencoded())
app.use('/product',products);

app.listen(port,(error)=>{
    if(!error){
        console.log(`Server running on ${port}`)
    }
    else{
        console.log("Error logged ",error)
    }
})
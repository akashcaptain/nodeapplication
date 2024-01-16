require('dotenv').config();

const Express = require('express');
const app = Express();

const port = process.env.PORT || 3001;



app.listen(port,(error)=>{
    if(!error){
        console.log(`Server running on ${port}`)
    }
    else{
        console.log("Error logged ",error)
    }
})
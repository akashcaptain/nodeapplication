const express = require('express')

const router = express.Router();

var products = [
    {Id:1,name:"A"},
    {Id:2,name:"A"},
    {Id:3,name:"A"}
]


    router.get('/',(req,res)=>{
        res.json(products);
    })
    .post('/',(req,res)=>{
        if(!req.body.name)
        {
            res.status(400);
            res.json({
                message:"Bad Request"
            })
        }else{
            var newId = products[products.length-1].id+1;
            products.push({
                id:newId,
                name:req.body.name
            });
            res.json({
                message:"New Id Added"
            })
        }
    })


module.exports=router;

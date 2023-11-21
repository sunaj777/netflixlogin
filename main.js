const mongoose = require('mongoose');
const express = require('express');
const cors= require('cors');
const bodyParser = require('body-parser');
const port=3002;

const app = express()
app.use(cors())
app.use(bodyParser.json());

const kittySchema = new mongoose.Schema({
    email:String,
    password:String,
});
const kitten=mongoose.model('netflix',kittySchema);

app.post('/', async (req,res)=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/test3')
    
    const p1=new kitten({email:req.body.email,password:req.body.password});
    p1.save();
   
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})


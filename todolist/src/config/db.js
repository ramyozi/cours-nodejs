require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri).then(
  ()=>{
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
)


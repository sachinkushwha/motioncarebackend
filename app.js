const express=require('express');
const app=express();
const cors =require('cors');
const {userRouter} =require('./routes/userRoutes');
const mongoose=require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(userRouter);

mongoose.connect(process.env.MONGO_URI).then(()=>{
app.listen(3000,()=>{
    console.log("server start http://localhost:3000");
})
})

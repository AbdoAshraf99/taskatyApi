import express from 'express';
import users from './Routes/userRoutes';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app=express();
app.use(express.json());
dotenv.config();



app.use('/users',users);

app.get('/',(req,res)=>{
    res.send("hiii");
});


mongoose.connect(process.env.DB_URL as string)
.then((val)=>{
    console.log("connected to DB")
    app.listen(8000,()=>{
        console.log("server running at 8000");
    });
})
.catch(err => console.log(`error: ${err}`));

import express from "express";
import User from "../schemas/userSchema";

const users=express.Router();

//get all users
users.get('/',(req,res)=>{
    res.send("All users");
});

//add new user
users.post('/',(req,res)=>{
    const user=new User({
        name:req.body.name,
        userName:req.body.username,
        password:req.body.password
    });

    user.save().then((result:any)=>{
        res.send(result);
    }).catch((err:any)=>{
        res.send(err);
    })
});

//login as user


users.post('/login',(req,res)=>{
    res.send("login");
});

export default users;
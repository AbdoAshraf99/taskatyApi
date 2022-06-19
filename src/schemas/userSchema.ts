import mongoose from "mongoose";

const schema=mongoose.Schema;

const userSchema=new schema({
    name:{
        type:String,
        required:true,
    },
    userName:{
        required:true,
        type:String
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true});

const User=mongoose.model('Users',userSchema);

export default User;